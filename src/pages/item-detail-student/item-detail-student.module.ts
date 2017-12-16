import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailStudentPage } from './item-detail-student';

@NgModule({
  declarations: [
    ItemDetailStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailStudentPage),
  ],
})
export class ItemDetailStudentPageModule {}
