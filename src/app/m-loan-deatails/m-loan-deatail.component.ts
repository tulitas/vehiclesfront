import { Component, OnInit } from '@angular/core';
import {Mloan} from '../models/mloan';
import {MLoanService} from '../services/mLoanService/m-loan.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-m-loan-deatail',
  templateUrl: './m-loan-deatail.component.html',
  styleUrls: ['./m-loan-deatail.component.css']
})
export class MLoanDeatailComponent implements OnInit {
  id: number;
  mLoan: Mloan;
  constructor(private route: ActivatedRoute, private router: Router,
              private mLoanService: MLoanService) { }

  ngOnInit(){
    this.mLoan = new Mloan()
    ;

    this.id = this.route.snapshot.params['id'];

    this.mLoanService.getMLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.mLoan = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['mloan']);
  }

}
