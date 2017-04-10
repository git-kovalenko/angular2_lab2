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
            <li *ngFor="let note of notes; let i=index">
                {{note.text}} <button (click)="remove(i)">remove</button>
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
    remove(idx) {
        this.notes.splice(idx,1);
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
        this.getNotes().then(notes=>{
            this.notes=notes;
            console.log(notes);
        });
    }
}

interface Note {
    text: string;
}