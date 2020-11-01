import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apgs } from './state/apgs.model';

@Injectable({
  providedIn: 'root',
})
export class ApgsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/apgs/';

  createapg(model: Apgs) {
    return this.http.post(this.baseUrl, model);
  }

  getapgs(): Observable<Apgs[]> {
    return this.http.get<Apgs[]>(this.baseUrl);
  }

  getapg(aprId: string): Observable<Apgs> {
    return this.http.get<Apgs>(this.baseUrl + aprId);
  }

  editapg(model: Apgs): Observable<Apgs> {
    return this.http.put<Apgs>(this.baseUrl + model.id, model);
  }

  deleteapg(aprId: number) {
    return this.http.delete(this.baseUrl + aprId);
  }
}
