import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  heroes = new MatTableDataSource(Heroes); /*
    To use sorting, wrap the data in a MatTableDataSource instance and set the
    sort property of that instance to the MatSort property that we defined previously
  */

  columnNames: string[] = ['id', 'name'];
  @ViewChild(MatSort, { static: true }) sort?: MatSort;


  ngOnInit(): void {
    this.heroes.sort = this.sort!;

  }
}
