import React, { Component } from 'react';

import './App.css';
import CreateNote from "./component/create-note/create-note";
import Notes from "./component/notes/notes";

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <header>
          <h1 className={'title'}>KEEP</h1>
        </header>
        <CreateNote />
        <Notes />
      </div>
    );
  }
}

export default App;


