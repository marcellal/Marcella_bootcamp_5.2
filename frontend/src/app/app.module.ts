import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ApiService} from './api.service';

import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventmasterComponent } from './eventmaster/eventmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    EventmasterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: EventmasterComponent },
      { path: 'evenlist', component: EventlistComponent},
    
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
