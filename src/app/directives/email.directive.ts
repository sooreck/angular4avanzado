import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function verificarEspacios (c: AbstractControl) {
    if (c.value == null) { return null; }
    if (c.value.indexOf(' ') >= 0) {
        return { sinEspacios: true};

    }
    return null;
}

@Directive({
    selector: '[email-directive]',
    providers: [{
        provide: NG_VALIDATORS, multi: true, useValue: verificarEspacios
    }]
})
export class EmailDirective {}
