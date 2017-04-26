import {Component} from "@angular/core";
import {User} from "./model/User";

@Component({
    selector:'userForm',
    templateUrl: 'app/userForm/userForm.component.html',
    styles: [`
        input.ng-touched.ng-invalid{
            background-color: #ffe8f1;
        }
    `]
})
export class UserFormComponent {
    user:User = {
        name:'',
        password:'',
        password2:'',
        subscribe: false,
        email:'',
        dateOfBirth: null
    };



}