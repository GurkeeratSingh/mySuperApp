import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public items: Items, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.item = navParams.get('item') || items.defaultItem;
  }
  removeItem(itemToRem: any){
    console.log(itemToRem);
  }
  openStudent(item){
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true ,
      content: "Cargando datos de la asignatura...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push('ItemDetailStudentPage', {
      item: item
    });

  }
  deleteStudentOfSubject(student, subject) {
    console.log(student);

    let sendSubject = {
      _id: '',
      name: '',
      quatri: '',
      studies: '',
      studentId: []
    };
    sendSubject._id=subject._id;
    sendSubject.studies=subject.studies;
    sendSubject.name=subject.name;
    sendSubject.quatri=subject.quatri;
    sendSubject.studentId.push(student._id);


    let confirm = this.alertCtrl.create({
      title: 'Borrar a '+student.name,
      message: 'Seguro que quieres borrar a '+student.name+' de la asignatura '+subject.name,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si quiero',
          handler: () => {
            console.log('Agree clicked');
            console.log(sendSubject);
            this.items.delateStudentFromSubject(sendSubject);
          }
        }
      ]
    });
    confirm.present();

  }

}
