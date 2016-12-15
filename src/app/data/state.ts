//our root app component
import { Component } from '@angular/core';

export enum eState {
    Default, Edit, Add
}

export class eStateObject {
    options: string[];
    _eState: typeof eState = eState;

    ngOnInit() {
        let x = eState;
        let options = Object.keys(eState);
        this.options = options.slice(options.length / 2);
    }

    parseValue(value: string) {
        return this._eState[value];
    }
    stringOf(value: number) {
        for (let n in this._eState) {
            if (typeof this._eState[n] === 'number') return this._eState[n];
        }
    }
}
