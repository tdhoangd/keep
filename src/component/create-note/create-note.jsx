import React, { Component } from 'react';

import './create-note.scss';
import TextareaAutosize from 'react-textarea-autosize';

import * as FirestoreService from '../../firebase/firebase';

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
    this.setState({ content: e.target.value });
  }

  handleChangeOnTitle = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleSubmitNote = async () => {
    if (this.state.content !== '' || this.state.title !== '') {
      FirestoreService.createNote(this.state.title, this.state.content)
        .then(ret => {
          this.props.handleAddNewNote();
        })
        .catch(() => console.log('ERROR'));
    }

    this.setState({
      title: '',
      content: '',
      collapsedView: true
    });

    let ta = document.getElementById('ta');
    ta.value = '';
    ta.style.height = '28px';
  }

  render() {
    const noteTitle = (!this.state.collapsedView) ? (
      <input
        className={'note-title'}
        placeholder={'Title'}
        onChange={this.handleChangeOnTitle}
      />
    ) : null;

    const noteContent = (
      <TextareaAutosize
        id={'ta'}
        name={'textarea-box'}
        className={'note-content'}
        placeholder={'Take a note...'}
        onChange={this.handleChangeOnContent}
      />
    );

    return (
      <div
        className={'create-note'}
        onClick={this.handleExpandView}
      >
        {noteTitle}
        {noteContent}
        <button className={'note-button'}
                type={'submit'}
                onClick={this.handleSubmitNote}
        >+
        </button>
      </div>
    );
  }
}

export default CreateNote;

