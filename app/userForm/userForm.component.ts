import {Component} from "@angular/core";
import {User} from "./model/User";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

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
    constructor( private http: Http, private router: Router) {};
    onSubmit() {
        this.http.post("users", this.user).subscribe(res=>{
            this.router.navigateByUrl("");
        });
    }


}