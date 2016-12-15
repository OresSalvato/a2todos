// data object
import { PictureItem } from '../data/picture';

export class Init {
    constructor(name: string){
        this.load(name);
    }
    private load(name: string) {
        if (localStorage.getItem(name) === null || localStorage.getItem(name) === undefined) {
            console.log('init: No Pictures found...');
            console.log('init: Create Initial Pictures...');
            let pictureList: Array<PictureItem> = new Array<PictureItem>();
            let picture: PictureItem = new PictureItem();
            picture.id =1;
            picture.title = 'test1';
            picture.imageURL='';
            pictureList.push(picture);
            picture.id=2;
            picture.title = 'test2';
            picture.imageURL='';
            pictureList.push(picture);
            picture.id=3;
            picture.title = 'test3';
            picture.imageURL='';
            pictureList.push(picture);
            localStorage.setItem(name, JSON.stringify(pictureList));
            return;
        } else {
            console.log('init: Pictures found...');

        }
    }
}
