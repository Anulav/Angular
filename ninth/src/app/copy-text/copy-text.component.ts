import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.css']
})
export class CopyTextComponent implements OnInit {

  content!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
