import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';

import { NotesComponent } from './notes.component';
import { SectionsComponent } from './sections.component';
import { HttpModule }    from '@angular/http';
import {DragulaModule} from "ng2-dragula";
import {SectionFilterPipe} from "./SectionFilterPipe";
import {RouterModule, Routes} from "@angular/router";
import {NotesEditorComponent} from "./NotesEditorComponent";
import {PageNotFoundComponent} from "./PageNotFoundComponent";
import {ViewSectionComponent} from "./ViewSectionComponent";
import {NotesServerService} from "./services/NotesServerService";
import {CanDeactivateNote} from "./CanDeactivateNote";


const appRoutes: Routes = [
    {path: '', component: NotesEditorComponent, canDeactivate:[CanDeactivateNote]},
    {path: 'viewSection/:name', component: ViewSectionComponent},
    {path: 'register', component: UserFormComponent},

    {path: ':name', component: NotesEditorComponent, canDeactivate: [CanDeactivateNote]},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, DragulaModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, NotesComponent, SectionsComponent, SectionFilterPipe, NotesEditorComponent, PageNotFoundComponent, ViewSectionComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ NotesServerService, CanDeactivateNote ]
})



export class AppModule { }