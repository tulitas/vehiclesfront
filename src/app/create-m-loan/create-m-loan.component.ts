import { Component, OnInit } from '@angular/core';
import {Mloan} from '../models/mloan';
import {MLoanService} from '../services/mLoanService/m-loan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-m-loan',
  templateUrl: './create-m-loan.component.html',
  styleUrls: ['./create-m-loan.component.css']
})
export class CreateMLoanComponent implements OnInit {
  mloan: Mloan = new Mloan();
  submitted = false;

  constructor(private mloanService: MLoanService,
              private router: Router) { }

  ngOnInit(): void {
  }
  newMloan(): void {
    this.submitted = false;
    this.mloan = new Mloan();
  }
  // tslint:disable-next-line:typedef
  save() {
    this.mloanService
      .createMloan(this.mloan).subscribe(data => {
        console.log(data)
        this.mloan = new Mloan();
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
    this.router.navigate(['/mloan']);
  }
}
