import React from 'react';

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());


    // may either save the ternary expression to a variable or place it within the return statement below
    // without saving to a variable
    const text = season === 'winter' ? 'Burr its chilly' : 'Lets go to the beach'



    return (
        <h1>
        {text}
        </h1>
    )
}

export default SeasonDisplay;