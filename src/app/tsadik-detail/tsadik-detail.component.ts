import { Component, OnInit, Input } from '@angular/core';
import { Tsadik } from '../tsadik/tsadik';

@Component({
  selector: 'app-tsadik-detail',
  templateUrl: './tsadik-detail.component.html',
  styleUrls: ['./tsadik-detail.component.css']
})
export class TsadikDetailComponent implements OnInit {

  @Input() tsadik:Tsadik;

  constructor() { }

  ngOnInit() {
    
  }

}
