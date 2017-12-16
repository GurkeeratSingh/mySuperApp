import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Student {
  items: Item[] = [];

  defaultItem: any = {
    "studentId": [
      {
        "_id": "5a0984d57043b831eca19ed9",
        "name": "Gurkeerat",
        "address": "C/Ejemplo",
        "__v": 0,
        "phone": {
          "home": "xxxxxxxxx",
          "work": "yyyyyyyyy"
        }
      }
    ]
  };

  constructor(public api: Api) { }


  query() {
    this.items = this.defaultItem;
    this.api.get('student/api/todos').subscribe((res: any) => { this.items = res });
    return this.api.get('student/api/todos');
  }

  /* query(params?: any) {
     return this.api.get('/subject/api/todos', params);
   }*/
  search(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    return this.api.post('student/api/', item);
  }

  delete(item: Item) {
  }

}
