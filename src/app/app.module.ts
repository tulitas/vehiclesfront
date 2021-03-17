import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MLoanListComponent } from './m-loan-list/m-loan-list.component';
import { UpdateMLoanComponent } from './update-mloan/update-mloan.component';
import {FormsModule} from '@angular/forms';
import {MLoanDeatailComponent} from './m-loan-deatails/m-loan-deatail.component';
import {CreateMLoanComponent} from './create-m-loan/create-m-loan.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CreateMLoanComponent,
    MLoanDeatailComponent,
    MLoanListComponent,
    UpdateMLoanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
