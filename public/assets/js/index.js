// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
    return getNotes().then(function(data) {
        renderNoteList(data);
    });
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);

$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);

$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gents and renders the initial list of notes
getAndRenderNotes();
