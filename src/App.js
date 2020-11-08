import React, { Component } from 'react';

import './App.css';
import Notes from "./component/notes/notes";

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <header>
          <h1 className={'title'}>KEEP</h1>
        </header>
        <Notes />
      </div>
    );
  }
}


export default App;

