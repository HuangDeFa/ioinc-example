import {Component, Input}from '@angular/core'

/**
 * 采用 @input 和get/set 进行监听父组件属性的变化
 */
@Component({
    selector:'contact-detail',
    template:`<div>
    <p>{{contact}}</p>
    </div>`
})
export class ContactDetail{
    private _contact=''
    @Input()
    set contact(contact:string){
        this._contact=(contact&&contact.trim())||"<no name set>"
    }
     
    get contact():string{
        return this._contact;
    }
}