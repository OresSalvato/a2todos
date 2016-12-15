import { item } from './item';

// data object
export class PictureItem extends item {
    personCardId: Number;
    galeryId: Number;
    originalId: Number; // original picture id

    title: String;
    description: String;
    creationDate: Date;
    imageURL: String;

    constructor(values: Object = {}) {
        super();
        Object.assign(this, values);
    }
}
