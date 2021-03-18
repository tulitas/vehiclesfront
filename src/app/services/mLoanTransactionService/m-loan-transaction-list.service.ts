import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MLoanTransaction} from '../../models/mLoanTransaction';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MLoanTransactionListService {
  private baseUrl = 'http://localhost:8080/vehicle/api/transaction';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getTransactionsList() {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  deleteTransaction(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });

  }

  // tslint:disable-next-line:ban-types
  createMloanTransaction(mLoanTransaction: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, mLoanTransaction);

  }

  // tslint:disable-next-line:typedef
  getMLoanTransaction(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);

  }
}
