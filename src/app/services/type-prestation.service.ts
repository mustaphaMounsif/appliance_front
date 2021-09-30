import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypePrestation } from '../models/type-prestation';

@Injectable({
  providedIn: 'root'
})
export class TypePrestationService {

  private baseURL="http://localhost:8000/api/v1/typePrestations";

  constructor(private httpClient:HttpClient) { }

  getTypePrestationList():Observable<TypePrestation[]>{
    return this.httpClient.get<TypePrestation[]>(`${this.baseURL}`);
  }

  createTypePrestation(typePrestation:TypePrestation):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',typePrestation);
  }

  updateTypePrestation(id:number,typePrestation:TypePrestation):Observable<any>{
    return this.httpClient.put(`${this.baseURL}`+'/update',typePrestation);
  }
  deleteTypePrestation(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
