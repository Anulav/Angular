import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  heroDetailsWithoutBuilder = new FormGroup({
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

  heroDetails!: FormGroup;

  private buildForm(){                /* We use the group method of the FormBuilder service to group form controls together.
                                         FormControl is now an array that contains two items: the first is the default value of the
                                         control, while the second is the list of validators. The FormBuilder service also contains
                                         the following methods:
                                         • control: Initializes a FormControl object
                                         • array: Initializes a FormArray object
                                         Using the FormBuilder service looks a lot easier to read, and we don't have to deal with
                                         the FormGroup, FormControl, and FormArray data types explicitly, although that is
                                         what is being created under the hood   */
  this.heroDetails = this.formBuilder.group(
    {name: ['', Validators.required],
     realName: ['', Validators.required],
     biometricData: this.formBuilder.group({
       age: [''],
       eyes: [''],
       hairy: ['']
     }),
     powers: this.formBuilder.array([])
  }
  );
}

  ngOnInit(): void {
    this.buildForm();
  }

  login(){
    const control = this.heroDetails.controls;
      console.log(control['realName'].value);
      console.log(this.heroDetails.get('biometricData')?.value['age']);
      console.log(this.heroDetails.get('biometricData')?.value['hairy']);

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
