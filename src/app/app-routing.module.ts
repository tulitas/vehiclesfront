
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MLoanListComponent} from './m-loan-list/m-loan-list.component';
import {CreateMLoanComponent} from './create-m-loan/create-m-loan.component';
import {UpdateMLoanComponent} from './update-mloan/update-mloan.component';
import {MLoanDeatailComponent} from './details/m-loan-deatails/m-loan-deatail.component';
import {MLoanTrasactionListComponent} from './m-loan-trasaction-list/m-loan-trasaction-list.component';
import {MLoanTrasactionCreateComponent} from './create/m-loan-trasaction-create/m-loan-trasaction-create.component';
import {MLoanTrasactionDetailsComponent} from './details/m-loan-trasaction-details/m-loan-trasaction-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'mloan', pathMatch: 'full' },
  { path: 'mloans', component: MLoanListComponent },
  { path: 'add', component: CreateMLoanComponent },
  { path: 'update/:id', component: UpdateMLoanComponent },
  { path: 'details/:id', component: MLoanDeatailComponent } ,
  { path: 'transactions', component: MLoanTrasactionListComponent } ,
  { path: 'addtransaction', component: MLoanTrasactionCreateComponent } ,
  { path: 'transactiondetails/:id', component: MLoanTrasactionDetailsComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
