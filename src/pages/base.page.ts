import { LoadingController, NavController, ActionSheetController, ActionSheetButton } from "ionic-angular";
import { Page, NavOptions } from "ionic-angular/navigation/nav-util";



export class BasePage{

    public getLoadingControl(loadingCtrl:LoadingController,messag:string,timeOut=10000,enableBackdropDismiss=true){
         return  loadingCtrl.create({
               content:messag,
               duration:timeOut,
               enableBackdropDismiss:enableBackdropDismiss,//返回键消失
               dismissOnPageChange:true,  //页面更改就消失
           })
    }


    public goBack(navCtrl:NavController){
           if(navCtrl.canGoBack()){
               navCtrl.pop({animate:true,animation:'ios-transition',duration:350})
           }
    }

    public goNext(navCtrl:NavController,page:string|Page,params?:any,navOption?:NavOptions){
           if(navOption==undefined || navOption==null){
               navOption={animate:true,animation:'ios-transition',duration:350}
           }
           navCtrl.push(page,params,navOption)  
    }

    public showActionSheet(actionCtrl:ActionSheetController,title?:string,buttons?:(ActionSheetButton | string)[]){
           return actionCtrl.create({
               title:title,
               enableBackdropDismiss:true,
               buttons:buttons
           })
    }
}