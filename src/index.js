import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import "./Button.css";
import './index.css';
import * as serviceWorker from './serviceWorker';

const lightGreen = '#66ff33';
const lightBlue = '#66ffff';
const lightRed = '#ff4d4d';
const lightYellow = '#ffff4d';

class ToggleColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: lightGreen
    }
    this.changeColor = this.changeColor.bind(this);
  }
    changeColor() {
      const newColor = this.state.color === lightGreen ? lightBlue : 
                          this.state.color === lightBlue ? lightRed :
                             this.state.color === lightRed ? lightYellow : lightGreen;
      this.setState({color : newColor});
    }
  render(){
    return(
      <div className='mainPage' style={{background:this.state.color}}>
        <Header name='Try to change color!' />
        <button onClick={this.changeColor} className='buttonChanger'>Change it!</button>
      </div>
    );
  }
}





ReactDOM.render(
  <React.StrictMode>
    <ToggleColor />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
