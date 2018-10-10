import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { Registration1Page } from '../pages/registration1/registration1';
import { Registration2Page } from '../pages/registration2/registration2';
import { Registration3Page } from '../pages/registration3/registration3';
import { Registration4Page } from '../pages/registration4/registration4';
import {MobileVerificationPage} from '../pages/mobile-verification/mobile-verification';
import { ApiProvider } from '../providers/api/api';
import { TruckDataProvider } from '../providers/truck-data/truck-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    LoginPage,
    Registration1Page,
    Registration2Page,
    Registration3Page,
    Registration4Page,
    MobileVerificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    LoginPage,
    Registration1Page,
    Registration2Page,
    Registration3Page,
    Registration4Page,
    MobileVerificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    TruckDataProvider
  ]
})
export class AppModule {}
