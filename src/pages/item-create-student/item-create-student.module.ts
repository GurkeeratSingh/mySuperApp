import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemCreateStudentPage } from './item-create-student';

@NgModule({
  declarations: [
    ItemCreateStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateStudentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemCreateStudentPage
  ]
})
export class ItemCreateStudentPageModule {}
