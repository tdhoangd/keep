import React from 'react';

import './notes.scss';
import Note from "./note/note";
import * as FirestoreService from '../../firebase/firebase';
import ModalEdit from "../modal-edit/modal-edit";
import CreateNote from "../create-note/create-note";
import firebase from "firebase/app";


function Notes() {
  const [notes, setNotes] = React.useState([]);

  const fetchNotes = React.useCallback(async () => {
    FirestoreService.fetchNotes()
      .then(ret => {
        const data = ret.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        });

        setNotes(data);
      })
      .catch(() => console.log('Error: cant fetch notes'));
  }, []);

  const handleAddNewNote = React.useCallback(async () => {
    await fetchNotes();
  }, [fetchNotes]);

  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const [editingNote, setEditingNote] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const handleUpdateNote = (title, content) => {
    if (editingNote.title ===  title && editingNote.content === content)
      return;
    else {
      FirestoreService.updateNote(editingNote.id, title, content)
        .then(() => {
          const t = notes.filter(note => editingNote.id !== note.id);
          const updatedNote = {
            title,
            content,
            createdOn: firebase.firestore.FieldValue.serverTimestamp(),
            id: editingNote.id
          }
          setNotes([updatedNote, ...t]);
        })
        .catch(() => console.log('ERROR: update err'));
    }
  };

  const handleDeleteNote = () => {
    FirestoreService.deleteNote(editingNote.id)
      .then(() => {
        const newNotes = notes.filter(note => editingNote.id !== note.id);
        setNotes(newNotes);
        setEditingNote(null);
      })
      .catch(() => {
        console.log('ERROR: cant delete note');
        setEditingNote(null);
      });
  };

  const handleEnableEditNote = (note) => {
    setEditingNote(note);
    setShowModal(true);
  }

  return (
    <>
      <CreateNote
        handleAddNewNote={handleAddNewNote}
      />
      <div className={'notes'}>
        {notes.map(note => (
          <Note
            handleEnableEditNote={handleEnableEditNote}
            key={note.id}
            id={note.id}
            note={note}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      {showModal ?
        <ModalEdit
          handleUpdateNote={handleUpdateNote}
          handleDeleteNote={handleDeleteNote}
          setShowModal={setShowModal}
          note={editingNote}
        /> : null}
    </>
  );
}

export default Notes;

