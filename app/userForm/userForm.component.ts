import {Component} from "@angular/core";
import {User} from "./model/User";

@Component({
    selector:'userForm',
    templateUrl: 'app/userForm/userForm.component.html'
})
export class UserFormComponent {
    user:User;
}