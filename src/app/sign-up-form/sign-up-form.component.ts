import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}