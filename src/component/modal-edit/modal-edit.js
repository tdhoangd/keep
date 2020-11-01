import React, { Component } from 'react';

import './modal-edit.scss';

class ModalEdit extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const com = (this.props.show ?
      <React.Fragment>
        <div
          show={this.props.show}
          clicked={this.props.modalClosed}
          className={'modal-backdrop'}
        />
        <div className={'modal-note'}>
          <div className={'modal-note-in'}>
            {this.props.title}
            {/*  title*/}
            {/*content*/}
            {/*footer: delete  + update*/}
          </div>
        </div>
      </React.Fragment>
      : null);

    return com;
  }
}

export default ModalEdit;