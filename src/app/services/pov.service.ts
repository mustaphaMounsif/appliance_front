import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pov } from '../models/pov';

@Injectable({
  providedIn: 'root'
})
export class PovService {

  private baseURL="http://localhost:8000/api/v1/povs";

  constructor(private httpClient:HttpClient) { }

  getPovList():Observable<Pov[]>{
    return this.httpClient.get<Pov[]>(`${this.baseURL}`);
  }

  createPov(pov:Pov):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',pov);
  }

  updatePov(id:number,pov:Pov):Observable<object>{
    return this.httpClient.put(`${this.baseURL}`+'/update',pov);
  }
  deletePov(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getPovByApplianceDetail(id:number):Observable<Pov[]>{
    return this.httpClient.get<Pov[]>(`${this.baseURL}`+'/detail/'+id);
  }

  getOnePov(id:number):Observable<Pov>{
    return this.httpClient.get<Pov>(`${this.baseURL}/${id}`);
  }

  getPovInfo(id:number):Observable<Pov>{
    return this.httpClient.get<Pov>(`${this.baseURL}`+'/info/'+id);
  }

}
