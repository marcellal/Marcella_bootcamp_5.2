import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http:Http, private router:Router) { }

  getEvent() {

    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.get('http://localhost:8000/api/add', options)
    .map(result => result.json());
  }

  addEvent(event_name:string, date:string, price:number, total_qty:number, venue:string) {
      let data = {
        "event_name" : event_name,
        "date": date,
        "price": price,
        "total_qty": total_qty,
        "venue" : venue,
      };
      let body = JSON.stringify(data);
      let headers = new Headers({"Content-Type" : "application/json"});
      let options = new RequestOptions({ headers : headers });
   
    
    return this.http.post('http://localhost:8000/api/add', body, options)
    .map(result => result.json());
    }

}
