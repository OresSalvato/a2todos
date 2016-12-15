import { Component, OnInit } from '@angular/core';
import { PersonCardService } from '../../services/person-card.service';
// globals
import { Globals } from '../../globals';
import { eState,eStateObject } from '../../data/state';
// data object
import { PersonCardItem } from '../../data/person-card';


@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  private personCardList: Array<PersonCardItem>;
  private personCard: PersonCardItem;
  private personCardHistory: PersonCardItem;

  private _eState : typeof eState = eState;
  constructor(private _personCardService: PersonCardService, private globals: Globals) {
    this.personCard = new PersonCardItem();
  }

  ngOnInit() {
    this.personCardList = this._personCardService.getList();
  }

  addPersonCard() {
    let newPersonCard: PersonCardItem = {
      id: this.personCardList[this.personCardList.length - 1].id + 1,
      name: this.personCard.name,
      surname: this.personCard.surname,
      dateOfBirth: this.personCard.dateOfBirth,
      aboutMe: this.personCard.aboutMe
    };
    this.personCardList.push(newPersonCard);
    this._personCardService.create(newPersonCard);
  }


  updatePersonCard() {
    let currentIndex: number;
    let currentPersonItem;
    for (let i = 0; i < this.personCardList.length; i++) {
      if (this.personCardList[i].id === this.personCardHistory.id) {
        currentPersonItem = this.personCardList[i];
        currentPersonItem = this.personCard;
        currentPersonItem.id = this.personCardList[i].id;
        //  var currentPersonItem: personCardItem = new personCardItem();
        //  currentPersonItem.name = this.personCard.name;
        //  currentPersonItem.surname = this.personCard.surname;
        //  currentPersonItem.dateOfBirth = this.personCard.dateOfBirth;
        //  currentPersonItem.aboutMe = this.personCard.aboutMe;
        currentIndex = i;
        break;
      }
    }
    this._personCardService.update(currentIndex, currentPersonItem);
    this.personCardHistory = new PersonCardItem();

    this.globals.state =  this._eState.Default;
  }
}
