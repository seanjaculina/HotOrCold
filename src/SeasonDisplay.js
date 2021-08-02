import React from 'react';

// creating a configuration object
// the keys in this object match the strings within the getSeason method
const seasonConfig = {
  summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
  },
  winter: {
      text: "Burr its cold",
      iconName: 'snowflake'
  }
};


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
    const {text, iconName } = seasonConfig[season]; // {text, iconName}. This has been destructured out from the seasonConfig object

    // **** saving the ternary expressions below to remember, but they are removed now due to the seasonConfig above doing the same logic. ****

    // may either save the ternary expression to a variable or place it within the return statement below
    // without saving to a variable
    // const text = season === 'winter' ? 'Burr its chilly' : 'Lets go to the beach'

    // getting an icon to display using semantic ui, first piece of logic is based off whether it is summer or winter
    // if season is equal to winter, return the string snowflake else return the string sun
    // const iconName = season === 'winter' ? 'snowflake' : 'sun'




    return (
        // template literal, grabbing the value of icon and adding a classname of icon
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;