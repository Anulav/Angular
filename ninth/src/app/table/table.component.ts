import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  heroes = new MatTableDataSource(Heroes);

  columnNames: string[] = ['id','name'];

  ngOnInit(): void {
  }

}
