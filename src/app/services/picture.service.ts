import { Injectable } from '@angular/core';
import { BaseService } from './baseService';

// data object
import { PictureItem } from '../data/picture';
// init picture list
import { Init } from '../data/picture.init';

@Injectable()
export class PictureService extends BaseService<PictureItem> {
  prefix = 'service<PictureService>:';
  name = 'picture';
  list;
  constructor() {
    super('picture', 'service<PictureService>:');
    console.log(this.prefix, ' PictureService Initialized ...');
    
    let ini: Init = new Init('picture');
    this.list = super.getList();
  }

 

  create(newTodo: PictureItem) {
    let pictureList: Array<PictureItem> = super.getList();
    // add next ID
    // newPersonCard.id = personalCardList[personalCardList.length].id + 1;
    // Add new Todo item
    pictureList.push(newTodo);
    super.resetObj(pictureList);
  }

  update(currentIndex: number, picture: PictureItem) {
    let pictureList: Array<PictureItem> = super.getList();
    pictureList[currentIndex] = picture;
    super.resetObj(pictureList);
  }

  delete(currentIndex: number) {
    let pictureList: Array<PictureItem> =super.getList();
    pictureList.splice(currentIndex, 1);
    super.resetObj(pictureList);
  }
}
