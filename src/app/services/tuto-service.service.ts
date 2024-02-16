import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Tuto} from "../types/type";
@Injectable({
  providedIn: 'root'
})
export class TutoServiceService {

  baseUrl = "http://localhost:8080/api/v1/tutos"
  constructor( private http: HttpClient) {

  }

  getAllTutos(token: string,title?: string) : Observable<Tuto[]>{
    if(title){
      return this.http.get<Tuto[]>(this.baseUrl+"?title="+title,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
    return this.http.get<Tuto[]>(this.baseUrl,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getTutoById(id: string,token: string) : Observable<Tuto>{
    return this.http.get<Tuto>(this.baseUrl+"/"+id,{
      headers: {
        'Authorization': `Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  addTuto(tuto: Tuto,token: string) : Observable<Tuto>{
    return this.http.post<Tuto>(this.baseUrl, tuto,{
      headers: {
        'Authorization': `Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  deleteTuto(id: string,token: string) : Observable<Tuto>{
    return this.http.delete<Tuto>(this.baseUrl+"/"+id,{
      headers: {
        'Authorization': `Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  updateTuto(id: string, tuto: Tuto,token: string) : Observable<Tuto>{
    const {title, description, publishedStatus} = tuto
    return this.http.put<Tuto>(this.baseUrl+"/"+id, {title, description, publishedStatus},{
      headers: {
        'Authorization': `Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }
deleteAllTutos(token: string): Observable<any>{
  return this.http.delete(this.baseUrl,{
    headers: {
      'Authorization': `Bearer ${token}`,
      "Allow-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

}
}
