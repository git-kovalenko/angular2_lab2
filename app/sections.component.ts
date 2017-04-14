import {Component, Output, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'sections',
    templateUrl: './app/sections.component.html'
})

export class SectionsComponent {
    private sectionsUrl = 'sections';  // URL to web api
    sections: Section[];
    activeSection:string;

    @Output() sectionChanged: EventEmitter<string> =
        new EventEmitter<string>();

    readSections() {
        this.getSections().subscribe(sections=>{
            this.sections=sections;
            if (this.activeSection == null && this.sections.length>0) {
                this.showSection(this.sections[0]);
            }
        });

    }
    getSections():Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map(response => response.json() as Section[]);
    }
    showSection(section:Section) {
        this.activeSection = section.title;
        this.sectionChanged.emit(this.activeSection);
    }

    constructor(private http: Http) {
        this.readSections();
    }
}

interface Section {
    _id: string;
    title: string;
}