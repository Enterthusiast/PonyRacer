import { Component, OnInit } from '@angular/core';
import {RaceService} from "../services/race.service";

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(private raceService: RaceService) {
  }

  races: Array<any> = [];

  refreshRaces() {
    this.races = this.list();
    // this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  list() {
    return this.raceService.list();
  }

  ngOnInit() {

  }

}
