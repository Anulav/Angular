import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Input, Output } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit , OnDestroy, OnChanges{ //We can implement multiple interfaces by using ','
  @Input() //To get the data from app component class.
  name!: string;

  @Output() //To send data to app component class.
  liked = new EventEmitter<Boolean>();

  constructor() {
    console.log(this.name); //Gives undefined. Ideally it is never recommended to have business logic in constructor. Also makes testing harder.

  }

  ngOnInit(): void {
    window.alert("On Init called with name as "+ this.name);
    /*Another good use of the hook is when we need to initialize a component with OnInit
    data that comes from an external source, such as an Angular service
    when we want to use a method of an Angular service before component initialization, we call it inside the method.
    ngOnInit

    */
  }

 ngOnChanges(changes : SimpleChanges): void{ //The Angular framework provides the lifecycle hook, which we can use to OnChanges inspect when the value of a data binding has changed.
    const hero = changes['name'];   /*The method ngOnChanges accepts an object of type SimpleChanges as a parameter that contains one key for each input property that changes. Each key points to another
                                    object with the properties and previousValue, which denote the
                                    currentValue new and the old value of the input property, respectively */
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if(!hero.isFirstChange()) // This line is to remove the initial log change of hero when the component is created and initializes name prperty from undefined.
    console.log(`Hero changed from ${oldValue} to ${newValue}`);
 }

  ngOnDestroy(): void { //The interface that we implement to hook on the destruction event is the OnDestroy lifecycle hook and the method to be
                        //implemented is ngOnDestroy.

  }

}
