import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ponyracer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [Title]
})
export class PonyRacerAppComponent {

  constructor(title: Title) {
    title.setTitle('PonyRacer - Bet on ponies');
  }

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
