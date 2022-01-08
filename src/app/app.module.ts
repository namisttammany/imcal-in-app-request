import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

const imcal = {
  apiKey: 'AIzaSyBrUq166ZTItXuL17Gmo3Po9bEicruDYOs',
  authDomain: 'imcalhsa.firebaseapp.com',
  databaseURL: 'https://imcalhsa.firebaseio.com',
  projectId: 'imcalhsa',
  storageBucket: 'imcalhsa.appspot.com',
  messagingSenderId: '1006649866664',
  appId: '1:1006649866664:web:cafcb348d2b36742'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(imcal, 'primary'),
    // AngularFireModule.initializeApp(nami, 'second'),
    // AngularFireModule.initializeApp(imcal, 'third'),
    // FirebaseApp,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
