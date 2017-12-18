import { Exemplo3Service } from './exemplo3.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Exemplo3Component } from './exemplo3/exemplo3.component';
import { CrudLocalStorageComponent } from './crud-local-storage/crud-local-storage.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Exemplo4Component } from './exemplo4/exemplo4.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo2Component,
    Exemplo3Component,
    CrudLocalStorageComponent,
    AppNavbarComponent,
    Exemplo4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng2Webstorage,
    ToastrModule.forRoot(
      {closeButton: true,
       progressBar: true,
       timeOut: 5000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true}
      )
  ],
  providers: [
    Exemplo3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
