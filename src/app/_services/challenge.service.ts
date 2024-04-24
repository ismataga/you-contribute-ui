import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Challenge} from "../_models/challenge";

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

  list():Observable<Challenge[]> {
    return this.http.get<Challenge[]>('${environment.API_URL}/challenges',)

  }
}
