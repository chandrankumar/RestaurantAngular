import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[customValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true}]
})
    
export class MustMatchDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors|null {
        return {'custom': true};
    }

}