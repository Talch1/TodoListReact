import React from 'react';
import './add-item.css';

export default class AddItem extends React.Component {
    render() {
        return (
        <div className='addItem'>
            <button
             type='button'
                className='btn btn-outline-success'
               onClick={ ()=> this.props.onAddItem('heloo') }
               >
                AddItem</button>
        </div>
        )
    }
}
