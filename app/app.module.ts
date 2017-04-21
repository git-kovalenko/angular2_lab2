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


const appRoutes: Routes = [
    {path: '', component: NotesEditorComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, DragulaModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, NotesComponent, SectionsComponent, SectionFilterPipe, NotesEditorComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ]
})



export class AppModule { }