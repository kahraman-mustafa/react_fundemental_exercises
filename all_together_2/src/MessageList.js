import React from 'react';
import PropTypes from "prop-types"
import Message from "./Message.js"

const MessageList = function(props) {
    const {user, messages} = props;
    return(
      <ul className="message-list">
        {messages.map((message, index) => (
          <Message keyIndex={index} key={index} message={message} user={user} />
        ))}
      </ul>
    );
}

MessageList.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
}

export default MessageList;