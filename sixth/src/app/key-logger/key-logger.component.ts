import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {
  keys: string = '';
  @ViewChild('keyContainer',{static: true}) input!: ElementRef; /* Template reference variables can be queried not only in the template, but also in the class component, using the @ViewChild decorator. The @ViewChild
                                                                   decorator accepts two parameters: the name of the template reference variable and an object with a static property. The static property indicates whether the
                                                                   element that we want to query will be available during component initialization. There are cases, however, where its value is false, such as when using an HTML element with an ngIf directive.

                                                                   The result of querying the keyContainer template reference variable is an ElementRef object.
  */

  //private event = new KeyboardEvent('keyup');



  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup');

    logger.subscribe((evt)=>{
      if(evt instanceof KeyboardEvent){ /* Jugaad!!! ;p */
        this.keys = '';
        this.keys += evt.key;
      }
    });
  }

}



/* https://stackoverflow.com/questions/47166369/argument-of-type-e-customevent-void-is-not-assignable-to-parameter-of-ty*/
