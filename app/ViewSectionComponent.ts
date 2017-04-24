import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Section} from "./sections.component";
import {NotesServerService} from "./services/NotesServerService";
import {Note} from "./notes.component";

@Component({
    selector: 'ViewSectionComponent',
    templateUrl: './app/viewSection.component.html'
})

export class ViewSectionComponent {
    constructor(private route: ActivatedRoute, private notesServer: NotesServerService){
    }
    section: string;
    notes: Note[];
    ngOnInit(){
        this.section = this.route.snapshot.params["name"];
        this.getNotes().subscribe(notes=>this.notes = notes)
    }
    getNotes(){
        return this.notesServer.getNotes(this.section);
    }
}