import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { PatientCardComponent } from './patient-card/patient-card.component';

@NgModule({
  declarations: [AppComponent, PatientCardComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    ScrollingModule,
  ],
  providers: [StatusBar, SplashScreen],
  bootstrap: [AppComponent],
})
export class AppModule {}
