import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aprs } from './state/aprs.model';

@Injectable({
  providedIn: 'root',
})
export class AprsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/aprs/';

  createapr(model: Aprs) {
    return this.http.post(this.baseUrl, model);
  }

  getaprs(): Observable<Aprs[]> {
    return this.http.get<Aprs[]>(this.baseUrl);
  }

  getapr(aprId: string): Observable<Aprs> {
    return this.http.get<Aprs>(this.baseUrl + aprId);
  }

  editapr(model: Aprs): Observable<Aprs> {
    return this.http.put<Aprs>(this.baseUrl + model.id, model);
  }

  deleteapr(aprId: number) {
    return this.http.delete(this.baseUrl + aprId);
  }
}
