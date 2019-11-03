import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
@observer
export default class MyTools extends React.Component<any> {
 
    render() {
        return (
            <React.Fragment>
                {
                    this.props.Items.items.map( (item:any) => {
                      return <div key={item}>{item}</div> 
                    } )
                }
                <input type='text' onKeyDown={this._handleKeyDown} />
            </React.Fragment>
        );
    }

    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.Items.items.push(e.target.value)
            e.target.value = '';
          }
    }

}
