import { HttpClient } from '@angular/common/http';
import { IonicPage, Slides, NavController } from 'ionic-angular';
import { BasePage } from './../base.page';
import { Component, ViewChild } from '@angular/core';

@IonicPage({name:'next-page'})
@Component({
      templateUrl:'next.html'
})
export class NextPage extends BasePage{

    @ViewChild('headBanner')
    slides:Slides;
    banners=[];
    constructor(navCtrl:NavController,public http:HttpClient){
        super();
    }

    ngOnInit(): void {
      this.http.get("http://www.wanandroid.com/banner/json").toPromise().then(data=>{
            
               if(data.hasOwnProperty('data')){
                   console.log(data)
                   this.banners=data['data']
               }
      }).catch(error=>console.log(error))
    }
}