import {NG_ASYNC_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
import {Http} from "@angular/http";
import {Directive} from "@angular/core";

@Directive({
    selector:   '[userUniqueValid][formControlName],[userUniqueValid][ngModel]',
    providers: [{provide:NG_ASYNC_VALIDATORS,
        useExisting: UserUniqueValidator, multi: true}]
})
export class UserUniqueValidator implements Validator{
    constructor( private http: Http) {}
    validate(c: AbstractControl): Promise<{[key: string]: any}> {
        const user = c.value;
        const params: URLSearchParams = new URLSearchParams();
        params.set('user', user);



        return new Promise(resolve =>
            this.http.get("/checkUserUnique", params)
                .map(    response => response.json())
                .subscribe(
                    // function(res){console.log(res)}
                    res => res?resolve(null):resolve({userUniqueValid:false})
                ));
    }
}