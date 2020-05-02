import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const lightGreen = '#66ff33';
const lightBlue = '#66ffff';
const lightRed = '#ff4d4d';
const lightYellow = '#ffff4d;

class ToggleColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: lightGreen
    }

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
