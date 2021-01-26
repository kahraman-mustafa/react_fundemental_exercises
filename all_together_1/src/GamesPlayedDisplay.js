import React from 'react';
import PropTypes from "prop-types";

const GamesPlayedDisplay = function(props) {

    const style2 = {
        "font-size": "small"
    }

    const {isVisibleGamesPlayed, handleChangeIsVisibleGamesPlayed} = props;
    const buttonLabel = isVisibleGamesPlayed ? "Hide the # of Games Displayed" : "Show the # of Games Displayed";

    return(
        <div key="games-played-display">
            <button style={style2} onClick={handleChangeIsVisibleGamesPlayed}>{buttonLabel}</button>
        </div>

    );
}

GamesPlayedDisplay.propTypes = {
    isVisibleGamesPlayed: PropTypes.bool.isRequired,
    handleChangeIsVisibleGamesPlayed: PropTypes.func.isRequired
};

export default GamesPlayedDisplay;