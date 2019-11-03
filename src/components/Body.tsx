import React from 'react';
import { observer } from 'mobx-react';
import global from '../Stores/GlobalSingleton';
import {Global, Store} from '../Stores/GlobalSingleton';
import Webpart from './Webpart';

@observer 
export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Webpart store={global.store} />
                {global.store.counter}
            </React.Fragment>
        );
    }
}