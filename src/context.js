import React, { Component } from 'react'


const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 'asadgta',
                name: 'Taylor Short',
                email: 'treddshort@gmail.com',
                phone: '425 785-0816'
            },
            {
                id: 'asregrh',
                name: 'Rachelle Short',
                email: 'rachelleshort@gmail.com',
                phone: '425 446-9958'
            },
            {
                id: 'hrsgrgs',
                name: 'Whitney Smith',
                email: 'whitneysmith@gmail.com',
                phone: '425 785-7563'
            }
          ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
            
        )
    }
}

export const Consumer = Context.Consumer;



