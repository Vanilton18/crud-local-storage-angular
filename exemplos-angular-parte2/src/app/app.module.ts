import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { Exemplo5ManipulationDomComponent } from './exemplo5-manipulation-dom/exemplo5-manipulation-dom.component';
import { ExemploServiceService } from './exemplo-service.service';
import { HttpModule } from '@angular/http';
import { ExemploServiceComponent } from './exemplo-service/exemplo-service.component';
@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo5ManipulationDomComponent,
    ExemploServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ExemploServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
