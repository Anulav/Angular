import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {
  keys: string = '';
  @Input() numeric!: boolean;
  @ViewChild('keyContainer',{static: true}) input!: ElementRef; /* Template reference variables can be queried not only in the template, but also in the class component, using the @ViewChild decorator. The @ViewChild
                                                                   decorator accepts two parameters: the name of the template reference variable and an object with a static property. The static property indicates whether the
                                                                   element that we want to query will be available during component initialization. There are cases, however, where its value is false, such as when using an HTML element with an ngIf directive.

                                                                   The result of querying the keyContainer template reference variable is an ElementRef object.
  */

  //private event = new KeyboardEvent('keyup');



  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup');

    logger.subscribe((evt: any)=>{
       /* Jugaad!!! ;p */
        this.keys = '';
        this.keys += evt.key;

    });

 /*   logger.pipe(tap(evt =>{         /* pipe is used to combine the operators using commas
      if(evt instanceof KeyboardEvent)
          console.log(evt.key);
    })).subscribe();
  */
   logger.pipe(
    map((evt: any) => {return evt.key.charCodeAt(0)}),
    filter(code => {
      if (this.numeric) {
        return !(code > 31 && (code < 48 || code > 57));
      }
      return true;
    }),
    tap(digit => console.log(String.fromCharCode(digit)))
  ).subscribe();
 /* By using Angular Documentation*/

}
}



/* https://stackoverflow.com/questions/47166369/argument-of-type-e-customevent-void-is-not-assignable-to-parameter-of-ty

  Creating observales.
  1. From values such as numbers using 'of':
  const value = of{1,2,3};
  values.subscribe(value => console.log(value));
  2. From array or promise using 'from':
  const value = from([1,2,3]);
  const value = from(this.onComplete()); As given above the onComplete is a promise. We could make a Observable from that.

  Refer https://angular.io/guide/rx-library As there have been quite some changes to the usage of RxJs in Angular.



*/
