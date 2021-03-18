import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MLoanTransactionListService} from '../services/mLoanTransactionService/m-loan-transaction-list.service';
import {Router} from '@angular/router';
import {MLoanTransaction} from '../models/mLoanTransaction';

@Component({
  selector: 'app-m-loan-trasaction-list',
  templateUrl: './m-loan-trasaction-list.component.html',
  styleUrls: ['./m-loan-trasaction-list.component.css']
})
export class MLoanTrasactionListComponent implements OnInit {
  mloanTransactions: Observable<MLoanTransaction[]>;
  constructor(private mloanTransactionService: MLoanTransactionListService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    // @ts-ignore
    this.mloanTransactions = this.mloanTransactionService.getTransactionsList();
  }

  // tslint:disable-next-line:typedef
  deleteTransaction(id: number) {
    this.mloanTransactionService.deleteTransaction(id)
      .subscribe(data => {
          console.log(data);
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  transactionDetails(id: number) {
    this.router.navigate(['transactiondetails', id]);
  }
}
