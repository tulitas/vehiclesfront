import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mloan} from '../../models/mloan';

@Injectable({
  providedIn: 'root'
})
export class MLoanService {
  private baseUrl = 'http://localhost:8080/vehicle/api/mloan';
  constructor(private http: HttpClient) { }

  getMLoansList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  deleteMLoan(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMLoan(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types

  // tslint:disable-next-line:ban-types
  createMloan(mLoan: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, mLoan);
  }

  // tslint:disable-next-line:typedef ban-types
  updateMloan(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);

  }
}
