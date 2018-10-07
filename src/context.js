import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
      case 'DELETE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(contact => 
          contact.id !== action.payload)
        }
        default: 
          return state;
    }
}


export default class Provider extends Component {
    state = {
        contacts: [
            {id: 1,
             name: 'Taylor Short',
             email: 'treddshort@gmail.com',
             phone: '425 785 0816'
            },
            {
             id: 2,
             name: 'Rachelle Short',
             email: 'rachelledshort@gmail.com',
             phone: '425 446 9958'
            },
            {
             id: 3,
             name: 'Wilder Short',
             email: 'wildershort@yahoo.com',
             phone: '425 454 7848'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
      };
        
  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;