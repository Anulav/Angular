import { animate, state, style, transition, trigger } from '@angular/animations';
import { splitClasses } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sizeAnimation', [
      state('small', style({
        transform: 'scale(1)',
        backgroundColor: 'green'
      })),
      state('large', style({
        transform: 'scale(1.6)',
        backgroundColor: 'red'
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ]),
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
  /*
    • trigger: Defines the property in the component that the animation targets.
    It accepts a name as the first argument and an array of states and transitions as
    the second.
    • state: Defines the value of the component property and what CSS properties it
    should have. We need to define one of these for each value that the property can take.
    • transition: Defines how the animation should perform when we go from one
    property value to another.
    • animate: Performs the defined animation when we move from one state value
    to the next.
  */
})
export class AppComponent {
  isBeating = false;
  title = 'tenth';
  state!: string;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
