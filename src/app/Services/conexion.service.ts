import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class conexionService {

  currentUser = {}

  readonly APIUrl= "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getAllServices():Observable<any>{
    return this.http.get<any>(this.APIUrl+`user`);
  }
}
