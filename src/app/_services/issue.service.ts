import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repository} from "../_models/repository";
import {Issue} from "../_models/issue";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) {
  }


  list(repositoryId: number): Observable<Issue[]> {
    return this.http.get<Issue[]>('${environment.API_URL}/issues?repository_id=${repositoryId}')
  }

}
