import {Component} from "@angular/core";

@Component({
    selector: "NotesEditorComponent",
    templateUrl: "./app/NotesEditorComponent.html"
})

export class NotesEditorComponent {
    section: string;
    setSection(section:string) {
        console.log('app.component  - '+ section)
        this.section = section;
    }
}