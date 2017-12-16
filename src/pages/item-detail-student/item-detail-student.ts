import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items) {
    this.item = navParams.get('item');
  }

  removeItem(itemToRem: any){
    console.log(itemToRem);
  }

}
