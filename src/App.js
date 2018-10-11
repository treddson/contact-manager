import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Provider from './context';
 
 
class App extends Component {
  render() {
    return (
      <Provider>
       <div className="App">
        <Header branding="Contact Manager"/>
         <div className="container">  
          <AddContact /> 
          <Contacts />
        </div>
      </div>
    </Provider>
    );
  } 
}

export default App;
