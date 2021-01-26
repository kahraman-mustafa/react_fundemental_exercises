import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from "./AddUser";
import UsersInfo from "./UsersInfo"
import GamesPlayedDisplay from "./GamesPlayedDisplay"

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  state = {
    users: [],
    isVisibleGamesPlayed: true
  };

  addUser = (newUser) => {
    this.setState(oldState => ({
      users: [...oldState.users, newUser],
    }));
  };

  handleChangeIsVisibleGamesPlayed = () => {
    this.setState(oldState => ({
      isVisibleGamesPlayed: !oldState.isVisibleGamesPlayed
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Video Game Players Info</h2>
        {/* Tüm kullanıcılar içinde userName mevcut mu kontrol etmek için */}
        {/* Girilen kullanıcı bilgilerinin App.js içindeki state e aktarmak için callback*/}
        <AddUser 
          users={this.state.users} 
          addUser={this.addUser}/> 
        
        <h2>Player List</h2>
        <GamesPlayedDisplay 
          isVisibleGamesPlayed={this.state.isVisibleGamesPlayed} 
          handleChangeIsVisibleGamesPlayed={this.handleChangeIsVisibleGamesPlayed} />
        <UsersInfo 
          users={this.state.users} 
          isVisibleGamesPlayed={this.state.isVisibleGamesPlayed} />
        
      </div>
    );
  }
}

export default App;
