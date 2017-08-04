import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eventmaster',
  templateUrl: './eventmaster.component.html',
  styleUrls: ['./eventmaster.component.css']
})
export class EventmasterComponent implements OnInit {

  constructor(private api:ApiService) { }

  event_name:string = "";
  date:string = "";
  price:number= null;
  total_qty:number= null;
  venue:string= "";

  eventlist:object[];

  ngOnInit() {
  }
  
  addEvent(){
    this.api.addEvent(this.event_name, this.date, this.price, this.total_qty, this.venue)
            .subscribe(result => this.eventlist = result);

    this.event_name = "",
    this.date = "",
    this.price = null,
    this.total_qty = null,
    this.venue = ""     
  }
}
