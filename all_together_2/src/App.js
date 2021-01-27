import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./ChatWindow.js"

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {

  users = [{ username: 'Fatma' }, { username: 'Mustafa' }];

  state = {messages: []};
  
  onNewMessageSend = (message) => {

    console.log("new message added to state" + message.text);
    this.setState((oldState) => ({
      messages: [...oldState.messages, message]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          
        {this.users.map((user) => (
          <ChatWindow key={user.username} user={user} messages={this.state.messages} onNewMessageSend={this.onNewMessageSend}/>
          ))}

        </div>
      </div>
    );
  }
}

export default App;
