import {Component, OnInit} from '@angular/core';
import {MLoanService} from '../services/mLoanService/m-loan.service';
import {Mloan} from '../models/mloan';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-mloan',
  templateUrl: './update-mloan.component.html',
  styleUrls: ['./update-mloan.component.css']
})
export class UpdateMLoanComponent implements OnInit {
  id: number;
  mLoan: Mloan;

  constructor(private route: ActivatedRoute, private router: Router,
              private mLoanService: MLoanService) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.mLoan = new Mloan();

    this.id = this.route.snapshot.params['id'];

    this.mLoanService.getMLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.mLoan = data;
      }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  updateMloan() {
    this.mLoanService.updateMloan(this.id, this.mLoan)
      .subscribe(data => {
        console.log(data);
        this.mLoan = new Mloan();
        this.gotoList();
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.updateMloan();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/mloan']);
  }

}
