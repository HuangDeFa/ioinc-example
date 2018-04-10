import { ArticleService } from './../../services/Article.service';
import {Component}from '@angular/core'
import { NavController, Platform, ActionSheetController, AlertController, App, LoadingController, IonicPage } from 'ionic-angular';
import { log } from 'three';


@Component({
    templateUrl:'detail.html',
    providers:[ArticleService],
})
export class Detail{
    aritcles=[];
    constructor(public platform:Platform,public actionCtrl:ActionSheetController,private articleService:ArticleService,
        public navCtrl:NavController,public alertCtrl:AlertController,public loadCtrl:LoadingController){
    
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
            type:'Radio',
            value:'Female',
            label:'Female',
            checked:false
        })
        radio.addInput({
            type:'Radio',
            value:'Male',
            label:'Male',
            checked:true
        })
        radio.addInput({
            type:'Radio',
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
            type:'Radio',
            value:'EP',
            label:'恩平',
            checked:true
        })
        radio.addInput({
            type:'Radio',
            value:'FS',
            label:'佛山',
            checked:false
        })
        radio.addButton("Cancel")
        radio.present();
    }
    showLoading(){
      this.loadCtrl.create({
        content:'Loading...',
        duration:2000
      }).present();
    }
    goBack(){
       this.navCtrl.pop();
    }
    getArticle(){
        this.articleService.getArticles(data=>{
             console.log(data)
             this.aritcles=data.data.datas;
        });
    }

}