import React  from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './modal-edit.scss';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    position: 'absolute',
    maxWidth: 400,
    maxHeight: 250,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  title: {
    fontSize: '24px',
    fontWeight: 400,
    width: '100%',
    border: 0,
    textAlign: 'left',
    paddingBottom: '5px',
  },

  content: {
    fontSize: '20px',
    fontWeight: 350,
    width: '100%',
    minHeight: '180px',

    textAlign: 'left',
    outline: 0,
    border: 0,
    boxSizing: 'border-box',
    paddingBottom: '5px'
  },

  footer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
}));


function ModalEdit(props) {

  const [updatedTitle, setUpdatedTitle] = React.useState(props.note.title);
  const [updatedContent, setUpdatedContent] = React.useState(props.note.content);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const clickedUpdate = () => {
    props.setShowModal(false);
    props.handleUpdateNote(updatedTitle, updatedContent);
  };

  const clickedDelete = () => {
    props.setShowModal(false);
    props.handleDeleteNote();
  };

  return (
    <Modal
      open={true}
      onClose={clickedUpdate}
    >
      <div
        style={modalStyle}
        className={classes.paper}
      >
        <input
          className={classes.title}
          defaultValue={props.note.title}
          onChange={(e) => setUpdatedTitle(e.target.value) }
        />

        <textarea
          className={classes.content}
          defaultValue={props.note.content}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
        <div className={classes.footer}>
          <Button
            onClick={clickedDelete}
            size={'small'}
            variant={'outlined'}
          >X</Button>
          <Button
            onClick={clickedUpdate}
            size={'small'}
            variant={'outlined'}
          >Update</Button>
        </div>
      </div>
    </Modal>

  );
}


export default ModalEdit;