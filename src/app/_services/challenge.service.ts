import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }

  accept(id: number): Observable<any> {
  return   this.http.patch('${environment.API_URL}/challenges/${id}',{status:"ACCEPTED"})
  }

  reject(id: number): Observable<any> {
    return this.http.patch('${environment.API_URL}/challenges/${id}',{status:"REJECTED"})
  }
}
