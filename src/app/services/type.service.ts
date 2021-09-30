import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeApp } from '../models/type-app';

@Injectable({
  providedIn: 'root'
})
export class TypeService { 

  private baseURL="http://localhost:8000/api/v1/types";


  constructor(private httpClient:HttpClient) { }

  getTypeList():Observable<TypeApp[]>{
    return this.httpClient.get<TypeApp[]>(`${this.baseURL}`);
  }

  createType(type:TypeApp):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',type);
  }

 updateType(id:number,type:TypeApp):Observable<object>{
return this.httpClient.put(`${this.baseURL}`+'/update',type);

 }

 deleteType(id:number):Observable<any>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
 }

 getTypeById(id:number){
   return this.httpClient.get(`${this.baseURL}/${id}`);
 }

}
