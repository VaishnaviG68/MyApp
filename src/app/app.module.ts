import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodDataService } from '../providers/food-data-service';
import { LocalStorageService } from '../providers/local-storage-service';
import {HttpClientModule} from '@angular/common/http';
import { NutrientDetailsPage } from '../pages/nutrient-details/nutrient-details';
import { NutrientInfoComponent } from '../pages/nutrient-details/nutrient-info/nutrient-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage , 
    NutrientDetailsPage , 
    NutrientInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule , 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage , 
    NutrientDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FoodDataService , 
    LocalStorageService , 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
