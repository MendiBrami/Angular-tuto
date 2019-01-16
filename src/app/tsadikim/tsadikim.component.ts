import { Component, OnInit } from '@angular/core';
import { Tsadik } from '../tsadik/tsadik';
@Component({
  selector: 'app-tsadikim',
  templateUrl: './tsadikim.component.html',
  styleUrls: ['./tsadikim.component.css']
})
export class TsadikimComponent implements OnInit {

  tsadik: Tsadik = {
    id: 1,
    name: 'בעל שם טוב',
    book: 'כתר שם טוב'

  }

  constructor() { }

  ngOnInit() {
  }

}
