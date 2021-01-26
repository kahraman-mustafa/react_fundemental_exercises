import React from 'react';
import UserInfo from "./UserInfo"

const UsersInfo = function(props) {
    const {users, isVisibleGamesPlayed} = props;
    return(
        <ol>
            {users.map((user) => (
                <UserInfo user={user} isVisibleGamesPlayed={isVisibleGamesPlayed} />
            ))}
        </ol>
    );
}

export default UsersInfo;