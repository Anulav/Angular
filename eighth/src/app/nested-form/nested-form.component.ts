import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    })
  });

  ngOnInit(): void {
  }

  login(){
    const control = this.heroDetails.controls;
      console.log(control['realName'].value);
      console.log(this.heroDetails.get('biometricData')?.value['age']);
  }

}


/* Added a nested form of Biometric Data. Angular is smart enough to recognize it as child form.
  May have expected to bind it directly to the heroDetails.
  property, but this is not going to work biometricData
*/
