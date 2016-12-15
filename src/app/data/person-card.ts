import { item } from './item';

// data object
export class PersonCardItem extends item {
    name: string;
    surname: string;
    dateOfBirth: string;
    aboutMe: string;
    constructor(values: Object = {}) {
        super();
        Object.assign(this, values);
    }
}
