import { Component, OnInit } from '@angular/core';
import {Mloan} from '../../models/mloan';
import {ActivatedRoute, Router} from '@angular/router';
import {MLoanService} from '../../services/mLoanService/m-loan.service';
import {MLoanTransaction} from '../../models/mLoanTransaction';
import {MLoanTransactionListService} from '../../services/mLoanTransactionService/m-loan-transaction-list.service';

@Component({
  selector: 'app-m-loan-trasaction-details',
  templateUrl: './m-loan-trasaction-details.component.html',
  styleUrls: ['./m-loan-trasaction-details.component.css']
})
export class MLoanTrasactionDetailsComponent implements OnInit {
  id: number;
  // tslint:disable-next-line:ban-types
  mLoanTransaction: Object;
  constructor(private route: ActivatedRoute, private router: Router,
              private mLoanTransactionService: MLoanTransactionListService) { }

  ngOnInit(){
    this.mLoanTransaction = new MLoanTransaction()
    ;

    this.id = this.route.snapshot.params['id'];

    this.mLoanTransactionService.getMLoanTransaction(this.id)
      .subscribe(data => {
        console.log(data);
        this.mLoanTransaction = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['transactions']);
  }

}
