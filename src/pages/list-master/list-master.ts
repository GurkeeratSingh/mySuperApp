import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController} from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import {MainPage} from "../pages";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
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

  sort() {
    this.currentItems.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
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

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true ,
      content: "Cargando datos de la asignatura...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
