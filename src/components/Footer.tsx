import {observer} from 'mobx-react';
import React from 'react';
import {Global} from '../Stores/GlobalSingleton';

@observer
export default class Footer extends React.Component<Global> {
    render() {
       return  (
        <React.Fragment>
            <h1>Footer:{this.props.store.counter}</h1>
            <button type='button' onClick={this.iterate}>++</button>
        </React.Fragment>
       )
    }
    iterate = ()=>{
        this.props.store.counter++;
    }
}