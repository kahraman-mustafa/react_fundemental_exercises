import React from 'react';
import PropTypes from "prop-types"

const Message = function(props) {
    const {user, message, keyIndex} = props;
    return(
          <li
            key={keyIndex}
            className={
              message.username === user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
    );
}

Message.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    keyIndex: PropTypes.number.isRequired
}

export default Message;