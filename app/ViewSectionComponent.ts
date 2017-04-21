import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Section} from "./sections.component";

@Component({
    selector: 'ViewSectionComponent',
    templateUrl: './app/viewSection.component.html'
})

export class ViewSectionComponent {
    constructor(private route: ActivatedRoute){}
    section: Section;
    ngOnInit(){
        this.section = this.route.snapshot.params["name"];
    }
}