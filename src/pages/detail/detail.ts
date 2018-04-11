import { ArticleService } from './../../services/Article.service';
import {Component}from '@angular/core'
import { NavController, Platform, ActionSheetController, AlertController, App, LoadingController, IonicPage, NavParams, Refresher } from 'ionic-angular';
import { log } from 'three';
import { BasePage } from "../base.page";
@IonicPage()
@Component({
    templateUrl:'detail.html',
    providers:[ArticleService],
})
export class Detail extends BasePage {
    aritcles=[];
    segmentValue='Paid'
    pageIndex=0;
    constructor(public platform:Platform,public actionCtrl:ActionSheetController,private articleService:ArticleService,
        public navCtrl:NavController,public navParam:NavParams,public alertCtrl:AlertController,public loadCtrl:LoadingController){
            super()
            
    }

    openActionSheet(){
     let actonSheet = this.actionCtrl.create({
         title:'Hello',
         cssClass:'action-sheet-basic-page',
         buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: !this.platform.is('ios') ? 'trash' : null,
              handler: () => {
                console.log('Delete clicked');
              }
            },
            {
              text: 'Share',
              icon: !this.platform.is('ios') ? 'share' : null,
              handler: () => {
                console.log('Share clicked');
              }
            },
            {
              text: 'Play',
              icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
              handler: () => {
                console.log('Play clicked');
              }
            },
            {
              text: 'Favorite',
              icon: !this.platform.is('ios') ? 'heart-outline' : null,
              handler: () => {
                console.log('Favorite clicked');
              }
            },
            {
              text: 'Cancel',
              role: 'cancel', // will always sort to be on the bottom
              icon: !this.platform.is('ios') ? 'close' : null,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
     });
     actonSheet.present();
    }

    openBasicAlert(){
     let alert=this.alertCtrl.create({
         title:"This Basice alert",
         buttons:[
             'cancle',
             {
                 text:'Ok',
                 handler:(value)=>{
                     console.log("Alert click"+value);
                 }
             }
         ]
     })
     alert.present()
    }

    showConfirmAlert(){
        let prompt=this.alertCtrl.create(
            {
                title:'Please conform this message!!',
                message:"Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
                buttons:[
                    'Disagree',
                    {
                        text:'Ok',
                        handler:(value)=>{
                            console.log("Alert click"+value);
                        }
                    }
                ]
            }
        )
        prompt.present()
    }

    showPromptalert(){
        let prompt =this.alertCtrl.create({
            title:'Name',
            message:'Pleaset enter you name',
            inputs:[
                {
                    name:'Prompt Name',
                    placeholder:'Enter your name'
                },
            ],
            buttons:[
                {
                    text:'Discard',
                    handler:()=>{
                       console.log("Discard")
                    }
                },
                "Ok"
            ]
        })
        prompt.present()
    }
    showRadioAlert(){
        let radio=this.alertCtrl.create({
            title:'Gender'
        });
        radio.addInput({
            type:'radio',
            value:'Female',
            label:'Female',
            checked:false
        })
        radio.addInput({
            type:'radio',
            value:'Male',
            label:'Male',
            checked:true
        })
        radio.addInput({
            type:'radio',
            value:'人妖',
            label:'人妖',
            checked:false
        })
        radio.addButton("Cancel")
        radio.present();
    }

    showCheckAlert(){
        let radio=this.alertCtrl.create({
            title:'Gender'
        });
        radio.addInput({
            type:'checkbox',
            value:'GZ',
            label:'广州',
            checked:false
        })
        radio.addInput({
            type:'checkbox',
            value:'EP',
            label:'恩平',
            checked:true
        })
        radio.addInput({
            type:'checkbox',
            value:'FS',
            label:'佛山',
            checked:false
        })
        radio.addButton("Cancel")
        radio.present();
    }
    showLoading(){
     return this.loadCtrl.create({
        content:'Loading...',
        duration:10000
      });
    }
    goBack(){
       this.navCtrl.pop({animate:true,animation:'ios-transition',duration:350,direction:'back'});
    }
    getArticle(pageIndex='0'){
       let loading = this.getLoadingControl(this.loadCtrl,"Loading articles")//this.showLoading();
       loading.present();
        this.articleService.getArticles(pageIndex,data=>{
             console.log(data)
             this.aritcles=data.data.datas;
             loading.dismiss();
             this.pageIndex=Number.parseInt(pageIndex)+1;
        });
    }

    doRefresh(refresher:Refresher){
        this.articleService.getArticles(this.pageIndex.toString(),data=>{
            console.log(data)
            if(data.data.datas!=null){
                data.data.datas.forEach(d => {
                    this.aritcles.push(d)
                });
            }
            refresher.complete();
            this.pageIndex++;
       }); 
    }

    goNext(){
        super.goNext(this.navCtrl,'next-page');
    }
}