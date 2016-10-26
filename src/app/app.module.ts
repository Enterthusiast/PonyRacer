import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

import { RaceService } from './services/race.service';
import { ApiService } from './services/api.service';
import {RacefakeService} from "./services/racefake.service";

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
  providers: [
    ApiService,
    RaceService,
    // Fake Race Service
    { provide: RaceService, useClass: RacefakeService }
  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule { }
