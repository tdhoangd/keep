import React, { Component } from 'react';

import './create-note.scss';
import TextareaAutosize from 'react-textarea-autosize';

class CreateNote extends Component {

  state = {
    title: '',
    content: '',
    collapsedView: true
  }

  handleExpandView = () => {
    if (this.state.collapsedView) {
      this.setState({
        collapsedView: false,
      });
    }
  };

  handleChangeOnContent = (e) => {
    this.setState({content: e.target.value});
  }

  handleChangeOnTitle = (e) => {
    // e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleSubmitNote = () => {
    console.log(this.state.content);
    console.log(this.state.title);
  }

  render() {
    const noteTitle = (!this.state.collapsedView) ? (
      <input
        className={'note-title'}
        placeholder={'Title'}
        onChange={this.handleChangeOnTitle}
      />
    ) : null;

    return (
      <div
        className={'note-input'}
        onClick={this.handleExpandView}
      >
        {noteTitle}
        <TextareaAutosize
          className={'note-content'}
          placeholder={'Take a note...'}
          onChange={this.handleChangeOnContent}
        />
        <button className={'note-button'}
                type={'submit'}
                onClick={this.handleSubmitNote}
        >+</button>
      </div>
    );
  }
}

export default CreateNote;
