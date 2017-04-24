import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "NotesEditorComponent",
    templateUrl: "./app/NotesEditorComponent.html"
})

export class NotesEditorComponent {
    section: string;
    constructor(private route: ActivatedRoute, private router: Router){
        this.route.params
            .map(params=>params["name"])
            .subscribe(section=>this.section=section);
    }
    setSection(section:string) {
        console.log('app.component  - '+ section)
        this.section = section;
        this.router.navigate([section]);
    }
}