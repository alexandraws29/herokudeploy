const router = require('express').Router();
const { takeNote, deleteNote } = require('../../lib/index');
const { notes } = require('../../db/db.json');
const note = takeNote(req.body, notes);

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    res.json(note);
});

router.delete('/notes/:id', (req,res) => {
    deleteNote(req.params.id, notes);
    var results = notes;
    res.json(results);
});

module.exports = router