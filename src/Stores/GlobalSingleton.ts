import {observable} from 'mobx';

export class Store{
    @observable counter:number = 1;
}

export class Global{
    store!:Store;
}

let store = new Store();
let global = new Global();
global.store = store;

export default global;