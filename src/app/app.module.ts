import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

@NgModule({
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PoniesComponent
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
