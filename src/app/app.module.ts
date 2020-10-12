import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
   BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
