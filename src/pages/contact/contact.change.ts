import { Component, Input, SimpleChanges } from "@angular/core";
import { Logger } from "../../services/Logger.service";

@Component({
    selector:'contact-change',
    template:
    `
    <style>
     p {
         color:red;
         padding:10px,0px;
     }
    </style>
    <div>On Contact Change </div>
    <p></p>
    <p>This a change style</p>
    <ul>
    <li *ngFor="let log of changeLogs">{{log}}</li>
    </ul>
    `,
    providers:[Logger],
    styles:['li { color : pink;}']
})
export class ContactChange{
   @Input()
   versionChange:number=0
   changeLogs:Array<string> =[]
   constructor(private log:Logger) {
       
   } 
   ngOnInit() {
    // this.versionChange=0;
    // this.changeLogs=[];
     this.log.log("on ContactChange Componet init--")
   }

   ngOnChanges(changes: SimpleChanges) {
       let logs=[];
       for (let key in changes) {
            let changeProp = changes[key];
            let current = JSON.stringify(changeProp.currentValue);
            if(changeProp.firstChange){
                logs.push(`Initial value of ${key} set to ${current}`)
            }else{
                let pre=JSON.stringify(changeProp.previousValue);
                logs.push(`${key} changed from ${pre} to ${current}`)
            }
          } 
          this.changeLogs.push(logs.join(', '))
   }
}