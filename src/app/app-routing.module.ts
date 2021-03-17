
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MLoanListComponent} from './m-loan-list/m-loan-list.component';
import {CreateMLoanComponent} from './create-m-loan/create-m-loan.component';
import {UpdateMLoanComponent} from './update-mloan/update-mloan.component';
import {MLoanDeatailComponent} from './m-loan-deatails/m-loan-deatail.component';

const routes: Routes = [
  { path: '', redirectTo: 'mloan', pathMatch: 'full' },
  { path: 'mloans', component: MLoanListComponent },
  { path: 'add', component: CreateMLoanComponent },
  { path: 'update/:id', component: UpdateMLoanComponent },
  { path: 'details/:id', component: MLoanDeatailComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
