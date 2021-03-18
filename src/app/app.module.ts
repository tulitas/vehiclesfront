import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MLoanListComponent } from './m-loan-list/m-loan-list.component';
import { UpdateMLoanComponent } from './update-mloan/update-mloan.component';
import {FormsModule} from '@angular/forms';
import {MLoanDeatailComponent} from './details/m-loan-deatails/m-loan-deatail.component';
import {CreateMLoanComponent} from './create-m-loan/create-m-loan.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MLoanTrasactionListComponent } from './m-loan-trasaction-list/m-loan-trasaction-list.component';
import { MLoanTrasactionDetailsComponent } from './details/m-loan-trasaction-details/m-loan-trasaction-details.component';
import { MLoanTrasactionCreateComponent } from './create/m-loan-trasaction-create/m-loan-trasaction-create.component';
// import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CreateMLoanComponent,
    MLoanDeatailComponent,
    MLoanListComponent,
    UpdateMLoanComponent,
    MLoanTrasactionListComponent,
    MLoanTrasactionDetailsComponent,
    MLoanTrasactionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
