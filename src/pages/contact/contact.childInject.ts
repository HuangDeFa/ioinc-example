import {Component } from '@angular/core'

@Component({
    selector:'contact-injectview',
    template:`<div>
    <p>This is a Inject Component</p>
    <span>{{expressMsg}}</span>
    </div>
    `
})
export class ContactChildInjectComponent{
       expressMsg:string=''
}