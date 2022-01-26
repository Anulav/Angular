import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  flag = false;
  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(2)]), //Passed Validators to the formControls. Either a single Validator or an array of Validators can be passed.
    /*  When we add a validator using the constructor  of FormControl,we can remove the respective HTML attribute from the template of the form.
        However, you could leave it for accessibility purposes so that screen readers can
        understand how the form control should be validated.
    */
    email : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  /*
    The constructor of the FormGroup class accepts an object that contains
    key-value pairs of FormControl instances. The key denotes a unique name for
    the form control that FormGroup can use to keep track of it, while the value is an
    instance of FormControl. Create two FormControl instances for our case – one
    for the username and another for the password.
  */
  constructor() { }

  ngOnInit(): void {
    this.flag=true;
  }

  login(){
    const control = this.loginForm.controls;
    console.log("Username: "+this.username.value);
    console.log("Password: "+this.password.value);
    console.log("Email: "+ this.email.value);

  }

  get username(): AbstractControl{                 //Not your usual getter method. See closely. Using getter methods to access the formControl attributes. A cleaner way!
    return this.loginForm.controls['username'];
  }

  get password(): AbstractControl{
    return this.loginForm.controls['password'];
  }

  get email(){
    return this.loginForm.controls['email'];
  }

}
