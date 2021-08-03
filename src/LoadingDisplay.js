import React from 'react';

const LoadingDisplay = (props) =>{


    return(
        <div className="ui active dimmer">
            <div className="ui text loader">
                {props.message}
            </div>
        </div>
    )
};

LoadingDisplay.defaultProps = {
    message: "Loading...",
}

export default LoadingDisplay;