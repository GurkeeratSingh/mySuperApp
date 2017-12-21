import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import {Student} from "../../providers/items/student";

/**
 * Generated class for the ListStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-student',
  templateUrl: 'list-student.html',
})
export class ListStudentPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Student, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items.query().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }
  getSubjectList() {
    this.items.query().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreateStudentPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item).subscribe((res: any) => {
          console.log(res);
          if (res.status == 'success') {

          } else {

          }
        }, err => {
          console.error('ERROR', err);
        });
      }
    });
    addModal.present();
  }
  deleteItem(item) {
    this.items.delete(item);
  }
  openItem(item: Item) {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true ,
      content: "Cargando datos del estudiante...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push('ItemDetailStudentPage', {
      item: item
    });
  }

}
