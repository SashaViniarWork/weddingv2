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
  imageChangedtwo: any = '';
  imageChangedthird: any = '';
  croppedImage: any = '';
  croppedImagetwo: any = '';
  croppedImagethird: any = '';
  public item: any;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      email: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required],
      qqq: ['', Validators.required],
      rent: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  addShare(name, description) {
    const dataObj = {
      description: description,
      file: this.croppedImage,
      file1: this.croppedImagetwo,
      file2: this.croppedImagethird,
      zastava: this.angForm.value.qqq,
      rent: this.angForm.value.rent,
      color: this.angForm.value.color
    };
    const obj = this.db.database.ref(this.basePath);
    obj.push(dataObj);
    alert("Плаття додано");
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
  fileChangetwo(event: any): void {
    this.imageChangedtwo = event;
  }

  imageCroppedtwo(image: string) {
    this.croppedImagetwo = image;
  }

  imageLoadedtwo() {
    // show cropper
  }

  loadImageFailedtwo() {
    // show message
  }
  fileChangethird(event: any): void {
    this.imageChangedthird = event;
  }

  imageCroppedthird(image: string) {
    this.croppedImagethird = image;
  }

  imageLoadedthird() {
    // show cropper
  }

  loadImageFailedthird() {
    // show message
  }

}
