import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL="http://localhost:8000/api/v1/contacts";

  constructor(private httpClient:HttpClient) { }

  getContactList():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseURL}`);
  }

  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',contact);
  }

  updateContact(id:number,contact:Contact):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/update',contact);
  }
  deleteContact(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
 
  getContactByClient(id:number):Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseURL}`+'/detail/'+id);
  }

}
