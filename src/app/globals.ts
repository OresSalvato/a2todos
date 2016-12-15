import { Injectable } from '@angular/core';
import { eState } from './data/state';
//import { TodoItem } from './data/todo';
//import { PersonCardItem } from './data/person-card';

Injectable()
export class Globals {
    sep = '/';
    version: string = "0.3";
    state: eState = eState.Default;
    personCardListStyle: string ='large';
    todoListStyle:string ='large';
    pictureListStyle:string ='large';
    issueListStyle:string = 'large';
    homeItemStyle:string ='large';

    currentTodo: number;
    currentPerson: number;
}
