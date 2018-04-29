import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;
  private basePath = '/rent';
  public items: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public item: any;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      email: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  addShare(name, description) {
    const dataObj = {
      name: name,
      description: description,
      file: this.croppedImage
    };
    const obj = this.db.database.ref(this.basePath);
    obj.push(dataObj);
    console.log('Success');
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image: string) {
    this.croppedImage = image;
  }

  imageLoaded() {
    // show cropper
  }

  loadImageFailed() {
    // show message
  }

}
