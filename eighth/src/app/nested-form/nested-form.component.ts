import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  heroDetails = new FormGroup({
    name: new FormControl(['']),
    realName: new FormControl(['']),
    biometricData : new FormGroup({
      age: new FormControl(['']),
      eyes: new FormControl(['']),
      hair: new FormControl([''])
    }),
    powers : new FormArray([]) /* Add a powers property to the heroDetails form group and set its value to
                                  an instance of the FormArray class. The constructor of the FormArray
                                  class accepts a list of FormControl instances as a parameter. For now, the list is
                                  empty since the hero does not have any powers initially:
    */
  });

  ngOnInit(): void {
  }

  login(){
    const control = this.heroDetails.controls;
      console.log(control['realName'].value);
      console.log(this.heroDetails.get('biometricData')?.value['age']);
      this.printPowers();
  }

  get powers(): FormArray{ /*
                              Define a getter property that returns the powers form array and cast it as a
                              FormArray type. Typecasting here is very important since we want to manipulate
                              the powers property using standard array methods such as push.

    */
    return this.heroDetails.controls['powers'] as FormArray;
  }

  addPower(){ /*
                Binding the click event of the button element to
                the newly created addPower method
  */
    this.powers.push(new FormControl(''));
  }

  printPowers(){
    this.powers.controls.forEach(element =>
        console.log(element.value)
      );
  }

}


/* Added a nested form of Biometric Data. Angular is smart enough to recognize it as child form.
  May have expected to bind it directly to the heroDetails.
  property, but this is not going to work biometricData
*/
