import {Component} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'notes',
    template: `
        <textarea [(ngModel)]="text" (keyup.enter)="addNote(text)" placeholder="Type and press Enter"></textarea>
        <button (click)="addNote(text)">Add</button>
        <button (click)="getNotes()">Get</button>
        <ul>
            <li *ngFor="let note of notes">
                {{note.text}} <button (click)="remove(note._id)">remove</button>
            </li>
        </ul>
    `
})
export class NotesComponent {
    private notesUrl = 'notes';  // URL to web api
    notes: Note[] = [
        {text:"Note one"},
        {text:"Note two"}
    ];

    text: string;
    add() {
        let note = { text: this.text };
        this.notes.push(note);
        this.text = "";
    }
    getNotes(): Promise<Note[]> {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[]);
    }
    addNote(note:Note) {
        console.log(note)
        this.http.post(this.notesUrl, {text:note}).toPromise()
            .then(response => {
                    console.log("note sent, response", response.text());
                    this.notes = response.text() ? response.json() : this.notes ;
                    this.text = '';
            } );
    }

    constructor(private http: Http) {
        this.readNotes();
    }
    readNotes() {
        this.getNotes().then(notes=>{
            this.notes=notes
            console.log(notes);
        });
    }
    remove(id:string) {
        console.log(id)
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id ${id} removed, response`, response);
                this.readNotes();
            });
    }
}

interface Note {
    text: string;
}