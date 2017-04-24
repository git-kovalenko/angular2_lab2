import {Injectable} from "@angular/core";
import {Note} from "../notes.component";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class NotesServerService{
    private notesUrl = 'notes';
    //section: string;
    constructor(private http: Http){}

    getNotes(section: string): Observable<Note[]> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('section', section);
        return this.http.get(this.notesUrl, {search: params.toString()})
            .map(response => response.json() as Note[]);
    }

}