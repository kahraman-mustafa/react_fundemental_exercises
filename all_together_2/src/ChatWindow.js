import React from 'react';
import PropTypes from "prop-types"
import MessageList from "./MessageList.js"
import EntryBox from "./EntryBox.js"

const ChatWindow = function(props) {
    const {user, messages} = props;

    const onNewMessageSend = (message) => {
        props.onNewMessageSend(message)
    }

    return(
        <div className="chat-window">
            <h2>Süper Harika Sohbet</h2>
            <div className="name sender">{user.username}</div>

            <MessageList user={user} messages={messages} />
            <EntryBox onNewMessageSend={onNewMessageSend} user={user}/>
          </div>
    );
}

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onNewMessageSend: PropTypes.func.isRequired
}

export default ChatWindow;