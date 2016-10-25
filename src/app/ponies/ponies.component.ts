import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

  refreshPonies() {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }, { name: 'Brocoly' }, { name: 'Ravioly' }];
  }

  ngOnInit() {
  }

}
