import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {NotesEditorComponent} from "./NotesEditorComponent";
import {Observable} from "rxjs";

@Injectable()
export class CanDeactivateNote implements CanDeactivate<NotesEditorComponent>{
    canDeactivate(
        notesEditorComponent: NotesEditorComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean{
        const note = notesEditorComponent.notesComponent.text;
        if (note && note.length>0){
            return window.confirm('You have entered the note. Do you really want to change section?');
        }else return true;
    }

}