import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Http, Request, RequestMethod, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database';

import {MatFormFieldModule} from "@angular/material";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  rForm: FormGroup;
  private basePath = '/contact';
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.rForm = fb.group({
      'email' : [null, [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      'name' : [null, Validators.required],
      'text' : [null, Validators.required],
    });
  }
  navigateToStepOne() {
    const dataObj = {
      name: this.rForm.value.name,
      email: this.rForm.value.email,
      message: this.rForm.value.text
    };
    const obj = this.db.database.ref(this.basePath);
    obj.push(dataObj);
    this.rForm.controls['name'].setValue('');
    this.rForm.controls['email'].setValue('');
    this.rForm.controls['text'].setValue('');
    console.log('Success');
  }
  ngOnInit() {
  }

}
