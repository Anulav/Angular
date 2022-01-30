import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  heroes = Heroes;
  constructor() { }
  ngOnInit(): void {
  }

}
