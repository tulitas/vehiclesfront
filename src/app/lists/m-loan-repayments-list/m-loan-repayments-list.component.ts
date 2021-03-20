import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Mloan} from '../../models/mloan';
import {MLoanService} from '../../services/mLoanService/m-loan.service';
import {Router} from '@angular/router';
import {MLoanRepayments} from '../../models/mLoanRepayments';
import {MLoanRepaymentScheduleService} from '../../services/mLoanRepaymentSchedule/mloan-repayment-schedule.service';

@Component({
  selector: 'app-m-loan-repayments-list',
  templateUrl: './m-loan-repayments-list.component.html',
  styleUrls: ['./m-loan-repayments-list.component.css']
})
export class MLoanRepaymentsListComponent implements OnInit {
  mloansRepayments: Observable<MLoanRepayments[]>;

  constructor(private repaymentsService: MLoanRepaymentScheduleService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.mloansRepayments = this.repaymentsService.getMLoansRapaymentList();
  }

  // tslint:disable-next-line:typedef
  deleteMloan(id: number) {
    this.repaymentsService.deleteMLoanReapayment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  mLoanRepaymentDetails(id: number) {
    this.router.navigate(['repayments', id]);
  }

}
