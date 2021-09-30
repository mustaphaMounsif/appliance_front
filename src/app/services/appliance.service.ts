import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appliance } from '../models/appliance';
import { Pov } from '../models/pov';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  private baseURL="http://localhost:8000/api/v1/appliances";

  constructor(private httpClient: HttpClient) { }

  /* methode  list appliance */

  getApplianceList():Observable<Appliance[]>{
    return this.httpClient.get<Appliance[]>(`${this.baseURL}`);
  }

  createAppliace(appliance:Appliance):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`+'/add',appliance);

  }

  getApplianceById(id:number):Observable<Appliance>{

    return this.httpClient.get<Appliance>(`${this.baseURL}/${id}`);

  }

  updateAppliance(id:number,appliance:Appliance):Observable<object>{
    return this.httpClient.put(`${this.baseURL}`+'/update',appliance);
  }

  deleteAppliance(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
 

}
