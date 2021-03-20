
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MLoanListComponent} from './lists/m-loan-list/m-loan-list.component';
import {CreateMLoanComponent} from './create/create-m-loan/create-m-loan.component';
import {UpdateMLoanComponent} from './update-mloan/update-mloan.component';
import {MLoanDeatailComponent} from './details/m-loan-deatails/m-loan-deatail.component';
import {MLoanTrasactionListComponent} from './lists/m-loan-trasaction-list/m-loan-trasaction-list.component';
import {MLoanTrasactionCreateComponent} from './create/m-loan-trasaction-create/m-loan-trasaction-create.component';
import {MLoanTrasactionDetailsComponent} from './details/m-loan-trasaction-details/m-loan-trasaction-details.component';
import {MLoanRepaymentsListComponent} from './lists/m-loan-repayments-list/m-loan-repayments-list.component';
import {MLoanRepaymentsDetailsComponent} from './details/m-loan-repayments-details/m-loan-repayments-details.component';
import {MLoanRepaymentCreateComponent} from './create/m-loan-repayment-create/m-loan-repayment-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'mloan', pathMatch: 'full' },
  { path: 'mloans', component: MLoanListComponent },
  { path: 'add', component: CreateMLoanComponent },
  { path: 'update/:id', component: UpdateMLoanComponent },
  { path: 'details/:id', component: MLoanDeatailComponent } ,
  { path: 'transactions', component: MLoanTrasactionListComponent } ,
  { path: 'addtransaction', component: MLoanTrasactionCreateComponent } ,
  { path: 'transactiondetails/:id', component: MLoanTrasactionDetailsComponent } ,
  { path: 'repayments', component: MLoanRepaymentsListComponent } ,
  { path: 'repayments/:id', component: MLoanRepaymentsDetailsComponent } ,
  { path: 'addrepayment', component: MLoanRepaymentCreateComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
