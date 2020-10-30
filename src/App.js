import React, { Component } from 'react';

import './App.css';
import CreateNote from "./component/create-note/create-note";

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_FB_AUTH);
    console.log(process.env.REACT_APP_FB_EXAMPLE);

    return (
      <div className={'App'}>
        <header>
          <h1 className={'title'}>KEEP</h1>
        </header>
        <CreateNote />
      </div>
    );
  }
}

export default App;


