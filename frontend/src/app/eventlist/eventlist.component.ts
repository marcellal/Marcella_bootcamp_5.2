import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private api:ApiService) { }
  event_name:string = "";
  date:string = "";
  price:number = null;
  total_qty:number = null;
  venue:string = "";

  eventlist:object[];

  ngOnInit() {
  }

  // this.api.getEvent()
  //     .subscribe(result => this.eventlist = result);
  // }

}
