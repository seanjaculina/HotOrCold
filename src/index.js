import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingDisplay from './LoadingDisplay';
class App extends React.Component{
    state = {
        lat: null,
        errMsg: '',
    };

    // data loading goes into componentDidMount over the constructor as 'best practice'
    componentDidMount(){
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
                <SeasonDisplay lat={this.state.lat}/>
            )
        }
        // if both checks failed, no lat or error
        return <LoadingDisplay message="Please accept location request"/>;
    }

}



ReactDOM.render(
    <App/>, document.querySelector('#root')
)