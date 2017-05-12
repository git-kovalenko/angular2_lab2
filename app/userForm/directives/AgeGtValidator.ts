import {Attribute, Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS} from "@angular/forms";
import * as moment from 'moment';


@Directive({
    selector: '[ageGt]',
    providers: [{provide:NG_VALIDATORS, useExisting: AgeGtValidator, multi: true}]
})
export class AgeGtValidator {
    moment: moment.Moment;

    constructor(@Attribute("ageGt") public ageGt:string){
    }
    ngOnInit() {
        this.moment = moment();
    }


    validate(c:AbstractControl):{[key: string]: any}{
        let value =  c.value;
        let maxAge = this.ageGt;
        //console.log(this.moment.fromNow(value, ''));

        //return {ageGt:false}
        return null
    }
}