import { Component, OnInit } from '@angular/core';
import { PersonCardService } from '../../services/person-card.service';
// globals
import { Globals } from '../../globals';
import { eState } from '../../data/state';


// data object
import { PersonCardItem } from '../../data/person-card';


@Component({
  selector: 'app-person-card-list',
  templateUrl: './person-card-list.component.html',
  styleUrls: ['./person-card-list.component.css']
})
export class PersonCardListComponent implements OnInit {

  private personCardList;
  private personCardHistory;
  private personCard;

  private _eState : typeof eState = eState;
  constructor(
    private _personCardService: PersonCardService,
    private globals: Globals
  ) { }

  ngOnInit() {
    this.personCardList = this._personCardService.getList();
  }

  editPersonCard(currentPersonCard: PersonCardItem) {
    
    this.globals.state = this._eState.Edit;
    this.personCardHistory = new  PersonCardItem() ;
    this.personCardHistory = this.personCard;
    this.personCard = currentPersonCard;
  }

  deletePersonCard(personCard: PersonCardItem) {
    let currentIndex: number;
    for (let i = 0; i < this.personCardList.length; i++) {
      if (this.personCardList[i].id === personCard.id) {
        this.personCardList.splice(i, 1);
        currentIndex = i;
        break;
      }
    }
    this._personCardService.delete(currentIndex);
  }
}
