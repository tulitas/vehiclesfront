import { Component, OnInit } from '@angular/core';
import {MLoanTransaction} from '../../models/mLoanTransaction';
import {MLoanTransactionListService} from '../../services/mLoanTransactionService/m-loan-transaction-list.service';
import {Router} from '@angular/router';
import {Mloan} from '../../models/mloan';
import {Observable} from 'rxjs';
import {MLoanService} from '../../services/mLoanService/m-loan.service';

@Component({
  selector: 'app-m-loan-trasaction-create',
  templateUrl: './m-loan-trasaction-create.component.html',
  styleUrls: ['./m-loan-trasaction-create.component.css']
})
export class MLoanTrasactionCreateComponent implements OnInit {
  mLoanTransaction: MLoanTransaction = new MLoanTransaction();
  mLoan: Mloan = new Mloan();
  mloanId: Observable<Mloan[]>;
  submitted = false;

  constructor(private mLoanTransactionService: MLoanTransactionListService,
              private mloanService: MLoanService,
              private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  newTransaction(): void{
    this.submitted = false;
    this.mLoanTransaction = new MLoanTransaction();
  }
  // tslint:disable-next-line:typedef
  save() {
    this.mLoanTransactionService
      .createMloanTransaction(this.mLoanTransaction).subscribe(data => {
        console.log(data)
        this.mLoanTransaction = new MLoanTransaction();
        this.gotoList();
      },
      error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  // tslint:disable-next-line:typedef
  private gotoList() {
    this.router.navigate(['/mloan']);

  }
  private reloadData() {
    this.mLoan = new Mloan();
    this.mloanId = this.mloanService.getMLoansList();
  }
}
