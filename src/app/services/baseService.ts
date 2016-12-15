import { IService } from './iService';

export abstract class BaseService<T> implements IService<T> {
  _name: string;
  _prefix: string;
  constructor(name:string, prefix:string) {
    this._name = name;
    this._prefix = prefix;
    console.log(this._prefix, this._name, '.service Initialized ...'); 
  }

  init() { }
  load() { }
  edit() { }

  getList() {
    console.log(this._prefix, ' get list ...');
    return this.loadObj();
  }
  select(id:number){
    let _list = this.getList();
    for (let i = 0; i < _list.length; i++) {
      if (_list[i].id === id) {
        return _list[i];
      }
    }
  }

  create(object: T) {
    console.log(this._prefix, ' add ...');
  }

  update(index: number, value: T) {
    console.log(this._prefix, ' update list ...');
  }
  delete(index: number) {
    console.log(this._prefix, ' delete ...');
  }
  // General Objects (functions and procedures)
  loadObj() {
    return JSON.parse(localStorage.getItem(this._name));
  }

  resetObj(list: Array<T>) {
    localStorage.setItem(this._name, JSON.stringify(list));
  }
}