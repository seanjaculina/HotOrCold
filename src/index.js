import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errMsg: '',

        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude }),
            (err) => this.setState({errMsg: err.message })
        );
    }



    render(){
        // if no latitude, but have a error
        if(this.state.errMsg && !this.state.lat){
            return (
                <div>Error: {this.state.errMsg}</div>
            )
        }
        // if no error and a latitude
        if(!this.state.errMsg && this.state.lat){
            return(
                <div>Latitude: {this.state.lat}</div>
            )
        }
        // if both checks failed, no lat or error
        return <div>Loading...!</div>
    }

}



ReactDOM.render(
    <App/>, document.querySelector('#root')
)