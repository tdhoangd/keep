
import { database } from './firebase';

export const creatNote = (title, content, date) => {
  // const id = database.ref('notes').push().key;
  // console.log(id);
  return database.ref('notes').push({
    title: title,
    content: content,
    createdOn: date
  });
}

export const getNotes = (cb) => {
  database.ref('notes')
    .on('value', cb, function (error) {
      console.log(error.code);
    });
}

//
// export const updateNote = (id, title = '', content = '', cb) =>
//   db
//     .ref('notes')
//     .orderByChild('id')
//     .equalTo(id)
//     .once('value')
//     .then(function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         db.ref('notes')
//           .child(childSnapshot.key)
//           .update({ title, content });
//       });
//
//       cb();
//     });
//
// // Delete
// export const deleteNote = id =>
//   db
//     .ref('notes')
//     .orderByChild('id')
//     .equalTo(id)
//     .once('value')
//     .then(function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         db.ref('notes')
//           .child(childSnapshot.key)
//           .remove();
//       });
//     });