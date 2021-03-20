import { Component, OnInit } from '@angular/core';
import {Mloan} from '../../models/mloan';
import {MLoanRepayments} from '../../models/mLoanRepayments';
import {MLoanService} from '../../services/mLoanService/m-loan.service';
import {Router} from '@angular/router';
import {MLoanRepaymentScheduleService} from '../../services/mLoanRepaymentSchedule/mloan-repayment-schedule.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-m-loan-repayment-create',
  templateUrl: './m-loan-repayment-create.component.html',
  styleUrls: ['./m-loan-repayment-create.component.css']
})
export class MLoanRepaymentCreateComponent implements OnInit {
  mloanRepayment: MLoanRepayments = new MLoanRepayments();
  mLoan: Mloan = new Mloan();
  mloanId: Observable<Mloan[]>;
  submitted = false;
  constructor(private mloanRepaymentService: MLoanRepaymentScheduleService,
              private mloanService: MLoanService,
              private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  newMloanRepayment(): void {
    this.submitted = false;
    this.mloanRepayment = new MLoanRepayments();
  }
  // tslint:disable-next-line:typedef
  save() {
    this.mloanRepaymentService
      .createMloanRepayment(this.mloanRepayment).subscribe(data => {
        console.log(data)
        this.mloanRepayment = new MLoanRepayments();
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
  gotoList() {
    this.router.navigate(['/mloanrepayment']);
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.mLoan = new Mloan();
    this.mloanId = this.mloanService.getMLoansList();
  }
}
