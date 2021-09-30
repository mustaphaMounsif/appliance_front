import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suivi } from '../models/suivi';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  private baseURL="http://localhost:8000/api/v1/suivis"

  constructor(private httpClient:HttpClient) { }
  getSuiviList():Observable<Suivi[]>{
    return this.httpClient.get<Suivi[]>(`${this.baseURL}`);
  }

  createSuivi(suivi:Suivi):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',suivi);
  }
  updateSuivi(id:number,suivi:Suivi):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/update',suivi);
  }
  deleteSuivi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
