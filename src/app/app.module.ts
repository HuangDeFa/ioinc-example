import { Detail } from './../pages/detail/detail';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {AboutDetailPage} from '../pages/about/about.detail'
import {ContactDetail} from '../pages/contact/contact.detail'
import {ContactChange} from '../pages/contact/contact.change'
import {CountDownLocalComponet} from '../pages/contact/contact.local'
import {ContactChildInjectComponent} from '../pages/contact/contact.childInject'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {HttpClientModule} from '@angular/common/http'
import {HighlightDirective} from '../directive/myHighlight.directive'


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AboutDetailPage,
    ContactDetail,
    ContactChange,
    CountDownLocalComponet,
    ContactChildInjectComponent,
    HighlightDirective,
    Detail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Detail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
