import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PonyRacerAppComponent } from './app.component';

@NgModule({
  declarations: [
    PonyRacerAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule { }
