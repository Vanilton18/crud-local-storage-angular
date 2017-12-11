import { Exemplo3Service } from './exemplo3.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Exemplo3Component } from './exemplo3/exemplo3.component';


@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo2Component,
    Exemplo3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Exemplo3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
