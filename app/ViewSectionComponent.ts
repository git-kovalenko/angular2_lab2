import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Section} from "./sections.component";
import {NotesServerService} from "./services/NotesServerService";

@Component({
    selector: 'ViewSectionComponent',
    templateUrl: './app/viewSection.component.html'
})

export class ViewSectionComponent {
    constructor(private route: ActivatedRoute, private noteServer: NotesServerService){
    }
    section: Section;
    notes: Note[];
    ngOnInit(){
        this.section = this.route.snapshot.params["name"];
        this.getNotes().subscribe(notes=>this.notes = notes)
    }
    getNotes(){
        return this.noteServer.getNotes(this.section);
    }
}