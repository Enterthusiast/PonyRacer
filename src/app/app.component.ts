import { Component } from '@angular/core';

@Component({
  selector: 'ponyracer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PonyRacerAppComponent {
  title = 'PonyRacer';
  numberOfUsers: number = 146;
  user: any = { name: 'Cédric' };
  onNewRace(event) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
    return 'A new race just begun!'
  }
}
