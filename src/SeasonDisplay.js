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

    // getting an icon to display using semantic ui, first piece of logic is based off whether it is summer or winter
    // if season is equal to winter, return the string snowflake else return the string sun
    const icon = season === 'winter' ? 'snowflake' : 'sun'


    return (
        // template literal, grabbing the value of icon and adding a classname of icon
        <div>
            <i className={`${icon} icon`}/>
            <h1>{text}</h1>
            <i className={`${icon} icon`}/>
        </div>
    )
}

export default SeasonDisplay;