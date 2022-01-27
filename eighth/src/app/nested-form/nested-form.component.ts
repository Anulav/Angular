import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { reservedNameValidator } from '../reserved-name-validator.directive';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  heroDetailsWithoutBuilder = new FormGroup({
    name: new FormControl([''], [reservedNameValidator(), Validators.required]),
    realName: new FormControl(['']),
    biometricData: new FormGroup({
      age: new FormControl(['']),
      eyes: new FormControl(['']),
      hair: new FormControl([''])
    }),
    powers: new FormArray([]) /* Add a powers property to the heroDetails form group and set its value to
                                  an instance of the FormArray class. The constructor of the FormArray
                                  class accepts a list of FormControl instances as a parameter. For now, the list is
                                  empty since the hero does not have any powers initially:
    */
  });

  heroDetails!: FormGroup;

  private buildForm() {                /* We use the group method of the FormBuilder service to group form controls together.
                                         FormControl is now an array that contains two items: the first is the default value of the
                                         control, while the second is the list of validators. The FormBuilder service also contains
                                         the following methods:
                                         • control: Initializes a FormControl object
                                         • array: Initializes a FormArray object
                                         Using the FormBuilder service looks a lot easier to read, and we don't have to deal with
                                         the FormGroup, FormControl, and FormArray data types explicitly, although that is
                                         what is being created under the hood   */
    this.heroDetails = this.formBuilder.group(
      {
        name: ['', [Validators.required, reservedNameValidator()]],
        realName: ['', Validators.required],
        biometricData: this.formBuilder.group({
          age: [''],
          eyes: [''],
          hair: ['']
        }),
        powers: this.formBuilder.array([])
      }
    );
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    const control = this.heroDetails.controls;
    console.log(control['realName'].value);
    console.log(this.heroDetails.get('biometricData')?.value['age']);
    console.log(this.heroDetails.get('biometricData')?.value['hair']);

    this.printPowers();
  }

  get powers(): FormArray { /*
                              Define a getter property that returns the powers form array and cast it as a
                              FormArray type. Typecasting here is very important since we want to manipulate
                              the powers property using standard array methods such as push.

    */
    return this.heroDetails.controls['powers'] as FormArray;
  }

  addPower() { /*
                Binding the click event of the button element to
                the newly created addPower method
  */
    this.powers.push(new FormControl(''));
  }

  printPowers() {
    this.powers.controls.forEach(element =>
      console.log(element.value)
    );
  }

  get name(): AbstractControl {
    return this.heroDetails.controls['name'];
  }

  addHero() {
    this.heroDetails.setValue({                               /*The FormGroup class contains two methods that we can use to change the values of a
                                                                form programmatically:
                                                                • setValue: Replaces values in all the controls of the form
                                                                • patchValue: Updates values in specific controls of the form
                                                                For setValue, Each key of the object that's passed in the setValue method must match the name
                                                                of each control in the form. If we omit one, Angular will throw an error.

                                                                */
      name: 'Munal Murali',
      realName: "Jaison Varghese",
      biometricData: {
        age: 30,
        eyes: '#006400',
        hair: '#8b4513'
      },
      powers: []
    });
  }

  addBio(){
    this.heroDetails.patchValue({
      biometricData: {
        age: 30,
        eyes: '#006400',
        hair: '#8b4513'
      }
    });
  }

}


/* Added a nested form of Biometric Data. Angular is smart enough to recognize it as child form.
  May have expected to bind it directly to the heroDetails.
  property, but this is not going to work biometricData
*/
