import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the ItemCreateStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-student',
  templateUrl: 'item-create-student.html',
})
export class ItemCreateStudentPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      address: [''],
      home:[''],
      work:['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateStudentPage');
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    let studentToSend = {name:'', address:'', phone:{home:'',work:''}};
    studentToSend.name = this.form.value.name;
    studentToSend.address = this.form.value.address;
    studentToSend.phone.home = this.form.value.home;
    studentToSend.phone.work = this.form.value.work;
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(studentToSend);
  }

}
