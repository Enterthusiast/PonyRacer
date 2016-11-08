import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

import { RaceService } from './services/race.service';
import { ApiService } from './services/api.service';
import { RacefakeService } from "./services/racefake.service";
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from "./pipe/from-now.pipe";

@NgModule({
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PoniesComponent,
    FromNowPipe,
    PonyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    // RaceService,
    // // Fake Race Service
    // { provide: RaceService, useClass: RacefakeService }

    { provide: 'IS_PROD', useValue: true },
    {
      provide: RaceService,
      useFactory: (IS_PROD, apiService) => IS_PROD ? new RaceService(apiService) : new RacefakeService(),
      deps: ['IS_PROD', ApiService]
    }

  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule { }
