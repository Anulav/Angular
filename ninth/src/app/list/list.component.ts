import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Heroes } from '../heroes';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes = Heroes;
  constructor() { }

  reorder(event: CdkDragDrop<Hero[]>){ /*
      It accepts a CdkDragDrop event of the Hero[]type. Although Angular CDK cannot
      reorder items by itself, it gives us the necessary artifacts to perform reordering efficiently.
      We use the built-in moveItemInArray method from the @angular/cdk/dragdrop
      namespace that performs reordering out of the box. It accepts three parameters: the
      array that we want to sort, the index of the current item that we drag it from, and the new
      index that we are going to drop it in.


    */
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {
  }

}
