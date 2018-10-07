import React, { Component } from 'react'
import { Consumer } from '../context';

export default class Contact extends Component {
        state = {
          showContactInfo: false
        };
     
        onDeleteClick = (id, dispatch) => {
          dispatch({type: 'DELETE_CONTACT', payload: id});
        };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
            <h4>{ name } <i 
                      onClick={() =>  this.setState({ showContactInfo: !this.state.showContactInfo })} 
                      style={{ cursor: 'pointer' }}
                      className="fas fa-sort-down">
                      </i>
                      <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: '#dc3545'}}
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      />
                      </h4>
            {showContactInfo ? (  <ul className="list-group">
              <li className="list-group-item">{ email }</li>
              <li className="list-group-item">{ phone }</li>
            </ul>
          ) : null} 
          </div>
          )
        }}
      </Consumer>
    );
  }
}
