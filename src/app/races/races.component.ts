import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Array<any> = [];

  refreshRaces() {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  OnInit() {

  }

}
