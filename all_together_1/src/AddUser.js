import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddUser extends Component {
  
  static propTypes = {
    addUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };
  
  state = {
  	fName: "",
    lName: "",
    uName: "",
    numGamesPlayed: 0,
    userNameExist: false
  }

  handleChangeFirstName = event => {
    this.setState({fName: event.target.value})
  };

  handleChangeLastName = event => {
    this.setState({lName: event.target.value})
  };

  handleChangeUserName = event => {
    const enteredUserName = event.target.value;

    this.setState({uName: enteredUserName})

    if(this.props.users.filter(user => user.userName === enteredUserName.trim()).length > 0){
      this.setState({ userNameExist: true});
    } else {
      this.setState({ userNameExist: false});
    }
  };

  handleChangeNumGames = event => {
    this.setState({numGamesPlayed: event.target.value})
  };

  requiredFieldIsEmpty = () => {
    return (this.state.fName === "" || this.state.lName === "" || this.state.uName === "" || this.state.userNameExist);
  };

  onSubmitUser = event => {
  	event.preventDefault();

    const user = {
      firstName: this.state.fName,
      lastName: this.state.lName,
      userName: this.state.uName,
      numberOfGamesPlayed: this.state.numGamesPlayed
    }

    this.props.addUser(user);

    this.setState({
      fName: "",
      lName: "",
      uName: "",
      numGamesPlayed: 0,
      userNameExist: false
    })
  }
  
  render() {

    const style1 = {
      redText: {
        "color": "red",
        "font-size": "small"
      }
    }
    
    return (
      <form onSubmit={this.onSubmitUser}>
        <div key="fName">
          <input
            type="text"
            placeholder="First Name"
            value={this.state.fName}
            onChange={this.handleChangeFirstName} />
        </div>

        <div key="lName">
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lName}
            onChange={this.handleChangeLastName} />
        </div>

        <div key="uName">
          <input
            type="text"
            placeholder="User Name"
            value={this.state.uName}
            onChange={this.handleChangeUserName} />
        </div>

        {this.state.userNameExist && (<p style={style1.redText}>Username exist, choose another one</p>)}

        <div key="numGames">
          <input
            key="numGames"
            type="number"
            placeholder="Number of Games Played"
            value={this.state.numGamesPlayed}
            onChange={this.handleChangeNumGames} />
        </div>

        <button disabled={this.requiredFieldIsEmpty()}>Add User</button>
      </form>
   	);
  }
  
}
  
  export default AddUser;