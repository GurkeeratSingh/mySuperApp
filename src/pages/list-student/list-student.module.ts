import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListStudentPage } from './list-student';

@NgModule({
  declarations: [
    ListStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ListStudentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListStudentPage
  ]
})
export class ListStudentPageModule {}
