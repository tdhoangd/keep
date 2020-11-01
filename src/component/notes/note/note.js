import React, { Component } from 'react';

import './note.scss';
import { ReactComponent as EditIcon } from '../../../assets/pen.svg';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditLogo: false
    }
  }

  setShowEditLogo = (b) => {
    this.setState({ showEditLogo: b })
  }

  render() {
    return (
      <div
        className={'note'}
        onMouseEnter={() => this.setShowEditLogo(true)}
        onMouseLeave={() => this.setShowEditLogo(false)}
      >
        <EditIcon className={`edit-icon ${this.state.showEditLogo? "" : "hidden" }`} />
        <div>
          <h1>{this.props.note.title}</h1>
          <pre className={'prev-wrap'}>{this.props.note.content}</pre>
        </div>

      </div>
    );
  }
}

export default Note;

