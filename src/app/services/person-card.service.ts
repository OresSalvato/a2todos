import { Injectable } from '@angular/core';
import { BaseService } from './baseService';

// data object
import { PersonCardItem } from '../data/person-card';
// init person list
import { Init } from '../data/person-card.init';

@Injectable()
export class PersonCardService extends BaseService<PersonCardItem> {
  prefix = 'service<PersonCardService>:';
  constructor() {
    super('person-card', 'service<PersonCardService>:');
    console.log(this.prefix, ' PersonCardService Initialized ...');
    let ini: Init = new Init('person-card');
  }

  create(newPersonCard: PersonCardItem) {
    let personalCardList: Array<PersonCardItem> = super.getList();
    // add next ID
    // newPersonCard.id = personalCardList[personalCardList.length].id + 1;
    // Add new Todo item
    personalCardList.push(newPersonCard);
    super.resetObj(personalCardList);
  }
  update(currentIndex: number, personCard: PersonCardItem) {
    let personalCardList: Array<PersonCardItem> = super.getList();

    personalCardList[currentIndex] = personCard;
    // personalCardList[currentIndex].surname = personCard.surname;
    super.resetObj(personalCardList);
  }

  delete(currentIndex: number) {
    let personalCardList: Array<PersonCardItem> = super.getList();
    personalCardList.splice(currentIndex, 1);
    super.resetObj(personalCardList);
  }
}
