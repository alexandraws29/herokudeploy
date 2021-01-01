const fs = require('fs');
const path = require('path');

function takeNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (id === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
        }
    }
    return false;
};

module.exports = {
    takeNote,
    deleteNote
};