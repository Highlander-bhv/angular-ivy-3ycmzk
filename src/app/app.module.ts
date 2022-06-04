import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Component1Component} from './components/component1/component1.component';
import {Component2Component} from './components/component2/component2.component';
import {Component3plusComponent} from "./components/component3plus/component3plus.component";
import {FormsModule} from "@angular/forms";

@NgModule({
              declarations: [
                  AppComponent,
                  Component1Component,
                  Component2Component,
                  Component3plusComponent,

              ],
              imports     : [
                  BrowserModule,
                  AppRoutingModule,
                  FormsModule
              ],
              providers   : [],
              bootstrap   : [AppComponent]
          })
export class AppModule {
}
