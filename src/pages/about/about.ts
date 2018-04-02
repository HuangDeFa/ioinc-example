import {Component, OnDestroy, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPageModule} from "ionic-angular";

import {MessageService} from '../../services/Message.service';
import {Message} from '../../bean/Message';
import { Logger } from '../../services/Logger.service';
import { AboutDetailPage } from "./about.detail";

@Component({selector: 'page-about', templateUrl: 'about.html', styleUrls: ['/src/pages/about/about.css'],providers:[Logger,MessageService]})
export class AboutPage implements OnInit,
OnDestroy,
OnChanges {
  Name : string = 'wangNiMa'
  Age : 15
  Tags : Array < String >
   ClickItem : String
  Messages : Array < Message > 
  constructor(public navCtrl : NavController, private msgService : MessageService,private logger:Logger) {}
  //初始化组件
  ngOnInit() : void {
    this.Tags = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.Tags[i] = "this item " + i;
    }
    this
      .Tags
      .forEach(tag => {
        console.log("onInit-->" + tag)
      });
    this.Messages = this
      .msgService
      .getMessages();
  }
  //销毁组件
  ngOnDestroy() : void {
    this
      .Tags
      .forEach(tag => {
        console.log("onDestroy-->" + tag)
      });
  }
  //属性绑定 内容更改的回调；第一次调用是在onInit之前
  ngOnChanges(changes : SimpleChanges) : void {
    throw new Error("Method not implemented.");
  }

  onItemClick(tag : string) : void {
    console.log("you click " + tag)
  }
}
