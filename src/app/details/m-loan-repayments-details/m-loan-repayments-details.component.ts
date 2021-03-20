import { Component, OnInit } from '@angular/core';
import {Mloan} from '../../models/mloan';
import {ActivatedRoute, Router} from '@angular/router';
import {MLoanService} from '../../services/mLoanService/m-loan.service';
import {MLoanRepayments} from '../../models/mLoanRepayments';
import {MLoanRepaymentScheduleService} from '../../services/mLoanRepaymentSchedule/mloan-repayment-schedule.service';

@Component({
  selector: 'app-m-loan-repayments-details',
  templateUrl: './m-loan-repayments-details.component.html',
  styleUrls: ['./m-loan-repayments-details.component.css']
})
export class MLoanRepaymentsDetailsComponent implements OnInit {
  id: number;
  mLoanRepayments: MLoanRepayments;
  constructor(private route: ActivatedRoute, private router: Router,
              private mLoanRepaymentsService: MLoanRepaymentScheduleService) { }

  ngOnInit(){
    this.mLoanRepayments = new MLoanRepayments();
    ;

    this.id = this.route.snapshot.params['id'];

    this.mLoanRepaymentsService.getMLoanReapayment(this.id)
      .subscribe(data => {
        console.log(data);
        this.mLoanRepayments = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['repayments']);
  }

}
