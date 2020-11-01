import React, { Component } from 'react';

import { getNotes } from "../../firebase/db";

import './notes.scss';
import Note from "./note/note";

class Notes extends Component {
  state = {
    notes: [],
    editing: false
  }

  componentDidMount() {
    getNotes((snapshot) => {
      const notes = snapshot.val();
      const state = Object.keys(notes)
        .map(i => Object.assign({}, notes[i], {id: i}) )
        .reverse();
      this.setState({notes: state});
    })
  }

  // handleEditingNote() {
  //   this.setState({
  //     editing: true
  //   });
  //   console.log('editing open ');
  // }
  //
  // handleEditedNote = () => {
  //   console.log('edited note');
  // }

  render() {
    return (
      <React.Fragment>
        <div className={'notes'}>
          {this.state.notes.map(note => (
            <Note
              key={note.id}
              note={note}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Notes;