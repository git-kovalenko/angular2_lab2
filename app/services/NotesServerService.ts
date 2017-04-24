import {Injectable} from "@angular/core";
import {Section} from "../sections.component";

@Injectable()
export class NotesServerService{
    private notesUrl = 'notes';
    section: Section;
    constructor(private http: Http){}

    getNotes(): Observable<Note[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('section', this.section);
        return this.http.get(this.notesUrl, {search: params.toString()})
            .map(response => response.json() as Note[]);
    }

}