const router = require('express').Router();
const { takeNote, deleteNote } = require('../../lib/index');
const { notes } = require('../../db/db.json');

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = takeNote(req.body, notes);
    res.json(note);
});

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.delete('/notes/:id', (req,res) => {
    deleteNote(req.params.id, notes);
    var results = notes;
    res.json(results);
});

module.exports = router