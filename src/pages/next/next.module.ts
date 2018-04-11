import { NgModule } from '@angular/core';
import { NextPage } from './next';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations:[NextPage],
    imports:[IonicPageModule.forChild(NextPage)],
    exports:[NextPage]
})
export class NextPageModule{

}