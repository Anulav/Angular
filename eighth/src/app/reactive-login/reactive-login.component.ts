import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(['']),
    password : new FormControl([''])
  });/*
    The constructor of the FormGroup class accepts an object that contains
    key-value pairs of FormControl instances. The key denotes a unique name for
    the form control that FormGroup can use to keep track of it, while the value is an
    instance of FormControl. Create two FormControl instances for our case – one
    for the username and another for the password.
  */
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    const control = this.loginForm.controls;
    console.log("Username: "+ control['username'].value);
    console.log("Password: "+ control['password'].value);
  }

}
