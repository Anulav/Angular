import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})
export class FlexLayoutComponent implements OnInit {

  heroes= Heroes;
  constructor() { }

  ngOnInit(): void {
  }

}
