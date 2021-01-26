import React from 'react';

const UserInfo = function(props) {
    const {user, isVisibleGamesPlayed} = props;
    return(
        <li key={user.userName}>{user.userName} played {isVisibleGamesPlayed === true ? user.numberOfGamesPlayed : "*"} games</li>
    );
}

export default UserInfo;