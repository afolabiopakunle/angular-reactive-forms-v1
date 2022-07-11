import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  
  constructor() { }

  ngOnInit() {
  }

}