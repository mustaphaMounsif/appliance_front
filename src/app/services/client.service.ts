import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baeURL="http://localhost:8000/api/v1/clients"
  constructor(private httpClient :HttpClient) { }

  getClientList():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baeURL}`);
  }

  createClient(client:Client):Observable<object>{
    return this.httpClient.post(`${this.baeURL}`+'/add',client);
  }
  updateClient(id:number,client:Client):Observable<object>{
  return  this.httpClient.put(`${this.baeURL}`+'/update',client);
  }
  deleteClient(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baeURL}/${id}`) ;
  }

  getClientByPov(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baeURL}/${id}`);
  }

}
