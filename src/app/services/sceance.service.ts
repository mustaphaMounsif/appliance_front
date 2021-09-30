import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sceance } from '../models/sceance';

@Injectable({
  providedIn: 'root'
})
export class SceanceService {

  private baseURL="http://localhost:8000/api/v1/sceances";

  constructor( private httpClient:HttpClient) { }

  getSceanceList():Observable<Sceance[]>{
    return this.httpClient.get<Sceance[]>(`${this.baseURL}`);
  }

  createSceance(sceance:Sceance):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',sceance);
  }

  updateSceance(id:number,sceance:Sceance):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/update',sceance);
  }

 deleteSceance(id:number):Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }

 getSceanceByPov(id:number):Observable<any>{
   return this.httpClient.get<Sceance[]>(`${this.baseURL}`+'/detail/'+id);
 }

}
