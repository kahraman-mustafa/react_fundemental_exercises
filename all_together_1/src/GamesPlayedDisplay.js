import React from 'react';
import PropTypes from "prop-types";

const GamesPlayedDisplay = function(props) {

    const {users, isVisibleGamesPlayed, handleChangeIsVisibleGamesPlayed} = props;
    const buttonLabel = isVisibleGamesPlayed ? "Hide the # of Games Displayed" : "Show the # of Games Displayed";

    const buttonShowHide = users && users.length > 0 ? 
        (<button className="smallButton" onClick={handleChangeIsVisibleGamesPlayed}>{buttonLabel}</button>) : "";

    return(
        <div key="games-played-display">{buttonShowHide}</div>
    );
}

GamesPlayedDisplay.propTypes = {
    isVisibleGamesPlayed: PropTypes.bool.isRequired,
    handleChangeIsVisibleGamesPlayed: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default GamesPlayedDisplay;