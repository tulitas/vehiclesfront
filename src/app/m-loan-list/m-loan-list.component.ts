import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Mloan} from '../models/mloan';
import {MLoanService} from '../services/mLoanService/m-loan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-m-loan-list',
  templateUrl: './m-loan-list.component.html',
  styleUrls: ['./m-loan-list.component.css']
})
export class MLoanListComponent implements OnInit {
  mloans: Observable<Mloan[]>;
  constructor(private mloanService: MLoanService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
this.reloadData();
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
  this.mloans = this.mloanService.getMLoansList();
  }
  // tslint:disable-next-line:typedef
  deleteMloan(id: number) {
    this.mloanService.deleteMLoan(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  mLoanDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
