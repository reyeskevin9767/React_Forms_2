import React, {Component} from 'react';
import logo from './logo.svg';
import BoxList from "./BoxList";

import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <BoxList />
      </div>
    );
  }
}

export default App;
