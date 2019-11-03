import {observable} from 'mobx';

class Tools {
    @observable items = ['First', 'Second']
}
let tools = new Tools;

export default tools;