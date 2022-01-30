import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-form-controls',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  heroes = Heroes;
  name = new FormControl('', Validators.required);

  filteredHeroes$?: Observable<Hero[]>;

  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.filteredHeroes$ = this.name.valueChanges /*
            a form control contains a valueChanges observable property. We can subscribe to that property and
            get notified when the user types in the input control. As soon as the observable emits a
            new value, we can filter the heroes array according to that value.

    */
    .pipe(map(name => this.heroes.filter(hero => hero.name.startsWith(name))));
  }

}

/*
  Imp: A FormControl instance can be used as a standalone control without necessarily needing to be inside a FormGroup instance.

*/
