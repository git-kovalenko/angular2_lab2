import {Component, Input, OnChanges} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {NotesServerService} from "./services/NotesServerService";

@Component({
    selector: 'notes',
    templateUrl: './app/notes.component.html'
})
//     `
export class NotesComponent implements OnChanges{
    private notesUrl = 'notes';  // URL to web api

    notes: Note[] = [
        {text:"Note one"},
        {text:"Note two"}
    ];
    text: string;

    constructor(private http: Http, private notesServer: NotesServerService) {
    }

    @Input() section:string;
    add() {
        let note = { text: this.text, section: this.section };
        this.notes.push(note);
        this.addNote(note);
    }

    addNote(note:Note){
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                    this.text = '';
            } );
    }
    ngOnChanges(){
        this.readNotes();
    }
    readNotes() {
        this.getNotes().subscribe(notes=>{
            this.notes=notes
            console.log(notes);
        });
    }
    remove(id:string) {
        console.log(id)
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params.toString() })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id ${id} removed, response`, response);
                this.readNotes();
            });
    }
}

// template: `
//         <textarea [(ngModel)]="text" (keyup.enter)="addNote(text)" placeholder="Type and press Enter"></textarea>
//         <button (click)="addNote(text)">Add</button>
//         <button (click)="getNotes()">Get</button>
//         <ul>
//             <li *ngFor="let note of notes" class="row">
//                 <div class="col-sm-4">{{note.text}}</div> {{note.date|date: 'HH:mm:ss:SS dd.MM.yyyy'}} <button (click)="remove(note._id)" class="btn-xs">remove</button>
//             </li>
//         </ul>
interface Note {
    text: string;
}
