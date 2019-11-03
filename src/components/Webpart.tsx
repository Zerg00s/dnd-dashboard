import React from 'react';
import { observer } from 'mobx-react';
import global from '../Stores/GlobalSingleton';
import {Global, Store} from '../Stores/GlobalSingleton';

@observer
export default class Webpart extends React.Component<Global> {

    render() {
        return (
            <React.Fragment>
                {this.props.store.counter}
            </React.Fragment>
        );
    }
}
