import React, { Component } from 'react';

import './App.css';
import CreateNote from "./component/create-note/create-note";

class App extends Component {
  render() {
    console.log(process.env.KEEP_APP_FB_AUTH);

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


