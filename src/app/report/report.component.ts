import { Component, OnInit } from '@angular/core';
import {Report} from '../models/report';
import {ActivatedRoute, Router} from '@angular/router';
import {MLoanService} from '../services/mLoanService/m-loan.service';
import {ReportService} from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report: Report;
  constructor(private route: ActivatedRoute, private router: Router,
              private reportService: ReportService) { }

  ngOnInit(){
    this.report = new Report();
    this.reportService.getReport();
  }

}
