import {Component, Input} from '@angular/core'


@Component({selector:'about-detial-page',template:`<div>
<h3>Welcome to detail</h3>
<span>{{detailTitle}}</span>
<label>This is parentName:</label>
<p> {{parentName}}</p>
</div>`
})
export class AboutDetailPage{
    @Input() parentName:string;
    detailTitle:string ='This is About Detail Page';
       constructor(){

       }

       ngOnInit() {
           //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
           //Add 'implements OnInit' to the class.
           
       }

       ngOnDestroy() {
           //Called once, before the instance is destroyed.
           //Add 'implements OnDestroy' to the class.
           
       }

       ngAfterViewInit() {
           //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
           //Add 'implements AfterViewInit' to the class.
           
       }
}