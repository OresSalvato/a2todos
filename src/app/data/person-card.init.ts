// data object
import { PersonCardItem } from '../data/person-card';

export class Init {
    constructor(name:string){
        this.load(name)
    }
    private load(name: string) {
        if (localStorage.getItem(name) === null || localStorage.getItem(name) === undefined) {
            console.log('init: No personCards found...');
            console.log('init: Create Initial personCards...');

            let personCards: Array<PersonCardItem> = new Array<PersonCardItem>();
            let pCard: PersonCardItem = new PersonCardItem();

            pCard.id = 1;
            pCard.name = 'Sandijs';
            pCard.surname = 'Svils';
            pCard.dateOfBirth = '';
            pCard.aboutMe = '';
            personCards.push(pCard);
            pCard.id = 2;
            pCard.name = 'Mára';
            pCard.surname = 'Alena';
            pCard.dateOfBirth = '';
            pCard.aboutMe = '';
            personCards.push(pCard);

            localStorage.setItem(name, JSON.stringify(personCards));
            return;
        } else {
            console.log('init: personCards found...');

        }
    }
}
