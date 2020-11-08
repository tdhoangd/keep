import React  from 'react';

import './note.scss';
import { ReactComponent as EditIcon } from '../../../assets/pen.svg';

function Note (props) {
  const [inHover, setHover] = React.useState(false);

  function editNote(note) {
    props.handleEnableEditNote((prev) => {
      return note;
    });
  }

  return (
    <div
      className={'note'}
      onClick={() => editNote(props.note)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <EditIcon className={`edit-icon ${inHover? "" : "hidden" }`} />
      <div>
        <h1>{props.note.title}</h1>
        <pre className={'prev-wrap'}>{props.note.content}</pre>
      </div>

    </div>
  );
}


export default Note;
