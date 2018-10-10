import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from "@angular/common/http";

import { api } from "../api/api";



@Injectable()
export class TruckData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public _http:HttpClient
  ) { }

  getTruckList():Observable<any>
  {
    var URL = api.ApiBaseURL + "TruckList";
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    return this._http.get(URL,{headers:headers});
  }

  getDefaultTruck():Observable<any>
  {
    var URL = api.ApiBaseURL + "DefaultTruck";
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    return this._http.get(URL,{headers:headers});
  }

  setDefaultTruck(Truck:any):Observable<any>
  {
    var URL = api.ApiBaseURL + "SetDefaultTruck";
    var headers = new HttpHeaders();   
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Headers','*');
    headers.append('content-type','application/json');
    return this._http.post(URL,Truck,{headers:headers});
  }

  addTruck(Truck:any)
  {
    var URL = api.ApiBaseURL + "AddTruck";
    var headers = new HttpHeaders();   
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Headers','*');
    headers.append('content-type','application/json');
    return this._http.post(URL,Truck,{headers:headers});
  }
}
