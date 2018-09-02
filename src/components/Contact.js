import React, { Component } from 'react'

class Contact extends Component {
    state = {
        showContactInfo: false
    };


    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

  render() {

    const { showContactInfo } = this.state;
    const { name, email, phone } = this.props.contact;

    return (
      <div 
        style={{
            color: '#4f4f4f'
        }}
        className="card card-body mb-3">
        <h4>{name}{' '} 
            <i 
                style={{
                    opacity: '0.6',
                    cursor: 'pointer'
                }}
                onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                className="fas fa-angle-down"></i>
            <i 
                onClick={this.onDeleteClick}
                className="fas fa-times" 
                style={{cursor: 'pointer', float: 'right', color: '#dc3545'}}/>
                </h4>

        { showContactInfo ? ( <ul 
                className="list-group"
                    style={{
                    listStyle: 'none'
                    }}>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
            </ul>) : null} 
      </div>
    )
  }
}

export default Contact;
