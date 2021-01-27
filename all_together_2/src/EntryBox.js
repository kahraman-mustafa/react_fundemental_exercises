import React, {Component} from 'react';
import PropTypes from "prop-types"

class EntryBox extends Component {

    static propTypes = {
        onNewMessageSend: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    state = {
        entry: ""
    }

    handleOnChangeEntry = event => {
        this.setState({entry: event.target.value})
    }

    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isEntryEmpty = () => {
        return this.state.entry.trim() === "" 
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.onNewMessageSend({username: this.props.user.username, text: this.state.entry});
        this.setState({entry:""})
    }

    render() {

        return(
            <div>
                <form className="input-group" onSubmit={this.handleOnSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Mesajınızı giriniz..."
                    value={this.state.entry}
                    onChange={this.handleOnChangeEntry} />

                <div className="input-group-append">
                    <button 
                        className="btn submit-button" 
                        disabled={this.isEntryEmpty()}>
                    GÖNDER
                    </button>
                </div>
                </form>
            </div>
        );
    }
}


export default EntryBox;