import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MLoanListComponent } from './lists/m-loan-list/m-loan-list.component';
import { UpdateMLoanComponent } from './update-mloan/update-mloan.component';
import {FormsModule} from '@angular/forms';
import {MLoanDeatailComponent} from './details/m-loan-deatails/m-loan-deatail.component';
import {CreateMLoanComponent} from './create/create-m-loan/create-m-loan.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MLoanTrasactionListComponent } from './lists/m-loan-trasaction-list/m-loan-trasaction-list.component';
import { MLoanTrasactionDetailsComponent } from './details/m-loan-trasaction-details/m-loan-trasaction-details.component';
import { MLoanTrasactionCreateComponent } from './create/m-loan-trasaction-create/m-loan-trasaction-create.component';
import { MLoanRepaymentsListComponent } from './lists/m-loan-repayments-list/m-loan-repayments-list.component';
import { MLoanRepaymentsDetailsComponent } from './details/m-loan-repayments-details/m-loan-repayments-details.component';
import { MLoanRepaymentCreateComponent } from './create/m-loan-repayment-create/m-loan-repayment-create.component';
import { ReportComponent } from './report/report.component';
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
    MLoanTrasactionCreateComponent,
    MLoanRepaymentsListComponent,
    MLoanRepaymentsDetailsComponent,
    MLoanRepaymentCreateComponent,
    ReportComponent
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
