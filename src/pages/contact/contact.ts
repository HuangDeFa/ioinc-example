import { IonicPage } from 'ionic-angular';
import { Component ,NgModule, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactChildInjectComponent} from './contact.childInject'
import { Detail } from '../detail/detail';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts=["wangNima"," ","王蜜桃"];
  versionChange:number=0;
  color:string;
  //将子组件注入
  @ViewChild(ContactChildInjectComponent)
  private chileComponent:ContactChildInjectComponent; 

  private hasChildComponentReady=false

  constructor(public navCtrl: NavController) {
   this.color='green'
  }

  AddVersionChange(){
     this.versionChange++;
  }

  SubVersionChange(){
    this.versionChange--;
    if(this.versionChange<=0){
      this.versionChange=0;
    }
  }

  //必须在这之后子组件才能被访问
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.hasChildComponentReady=true;
  }

  changeInjectViewMsg(){
    if(this.hasChildComponentReady)
     this.chileComponent.expressMsg="this a message from parent component"
  }

  goDetail(){
    this.navCtrl.parent.parent.push(Detail)
  }

}
