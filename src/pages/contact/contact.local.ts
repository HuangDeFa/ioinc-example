import {Component, ElementRef } from '@angular/core'

@Component(
    {
        selector:'contact-countdown',
        template:`<div>{{Msg}}</div>`
    }
)
export class CountDownLocalComponet{
   style:any={display:'none'}
   IsshowMsg:boolean=false; 
   Msg:string="Yeah! It's a new Message show"
   domElement:ElementRef
   showMsg(){
     this.IsshowMsg=!this.IsshowMsg;
     this.style=this.IsshowMsg?{display:'display'}:{display:'none'}
     this.domElement.nativeElement.style=this.style;
   }

   constructor(el:ElementRef){
      this.domElement=el
   }
}
