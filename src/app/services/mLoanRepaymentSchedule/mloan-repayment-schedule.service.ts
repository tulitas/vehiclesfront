import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MLoanRepaymentScheduleService {
  private baseUrl = 'http://localhost:8080/vehicle/api/mloanrepayment';
    constructor(private http: HttpClient) { }

  getMLoansRapaymentList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  deleteMLoanReapayment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMLoanReapayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types

  // tslint:disable-next-line:ban-types
  createMloanRepayment(mLoanRepayments: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, mLoanRepayments);
  }

  // tslint:disable-next-line:typedef ban-types
  updateMloanRepayments(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);

  }
}
