import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

import {Student} from "../../providers/items/student";

/**
 * Generated class for the ItemDetailStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail-student',
  templateUrl: 'item-detail-student.html',
})
export class ItemDetailStudentPage {
  item: any;
  subjectSelected: string;
  subjectList: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.item = navParams.get('item');

    items.query().subscribe((res: any) => {
      this.subjectList=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }


  removeItem(itemToRem: any){
    console.log(itemToRem);
  }
  addStudentToSubject(){
    let sendSubject = {
      _id: '',
      name: '',
      quatri: '',
      studies: '',
      studentId: []
    };
    sendSubject._id = this.subjectSelected;
    sendSubject.studentId.push(this.item._id);
    this.items.addStudentToSubjectt(sendSubject);

  }

}
