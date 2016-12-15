import { item } from './item';

// data object
export class TodoItem extends item {
    text: string;
    constructor(values: Object = {}) {
        super();
        Object.assign(this, values);
    }
}
