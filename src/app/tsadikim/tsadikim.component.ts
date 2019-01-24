import { Component, OnInit } from '@angular/core';
import { Tsadik } from '../tsadik/tsadik';
import { TSADIKIM } from '../mock-tsadikim';

@Component({
  selector: 'app-tsadikim',
  templateUrl: './tsadikim.component.html',
  styleUrls: ['./tsadikim.component.css']
})
export class TsadikimComponent implements OnInit {

  tsadikim = TSADIKIM;
  currentTsadik:Tsadik;
  constructor() { }

  ngOnInit() {
    this.currentTsadik = this.tsadikim[0];
  }
  
  click(tsadik:Tsadik) {
    this.currentTsadik = tsadik;
  }
}