import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  @ViewChild(MatPaginator, {static: true}) paginator?: MatPaginator;
  /* Use the @ViewChild decorator to get a reference to the mat-paginator
     element that we created*/

  ngOnInit(): void {
    this.heroes.sort = this.sort!;
    this.heroes.paginator = this.paginator!;

  }
}
