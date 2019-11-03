import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import { thisExpression } from '@babel/types';
import { reaction, observable} from 'mobx';
import { observer} from 'mobx-react';
import { Store, Global } from './Stores/GlobalSingleton'
import global from './Stores/GlobalSingleton'
import Footer from './components/Footer';
import Body from './components/Body';


// class App extends React.Component {
//     state = initialData;
//     render() {
//         return this.state.columnOrder.map( (columnId:string) => {
//             const column = (this.state.columns as any)[columnId];

//             const tasks = column.taskIds.map((taskId:string) => {
//                 return (this.state.tasks as any)[taskId]}
//             );

//         });

//         return <Column key={key=column.id} column={column} tasks={tasks} />
//     }
// }

@observer
class App extends React.Component {
    render() {
       return  (
        <React.Fragment>
            <Header store={global.store} />
            <Body />
            <Footer store={global.store} />
            
        </React.Fragment>
       )
    }
}

@observer
class Header extends React.Component<Global> {
    render() {
       return  (
        <React.Fragment>
            <h1>Header: {this.props.store.counter}</h1>
            <button type='button' onClick={this.iterate}> ++</button>
        </React.Fragment>
       )
    }

    iterate = ()=>{
        this.props.store.counter++;
    }
}



ReactDOM.render(<App />, document.getElementById('root'));