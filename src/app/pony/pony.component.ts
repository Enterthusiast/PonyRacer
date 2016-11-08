import {Component, OnInit, Output, Input} from '@angular/core';
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'ns-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  constructor() { }

  style: any = {};

  @Input()
  set isEven(value) {
    this.style.color = value ? 'green' : 'black';
  }

  @Input() pony: any;
  @Output() ponySelected = new EventEmitter<any>();

  selectPony() {
    this.ponySelected.emit(this.pony);
  }

  ngOnInit() {
  }

}
