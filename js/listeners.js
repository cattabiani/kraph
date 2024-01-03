// new node
document.addEventListener("dblclick", async function (event) {
    if (isModalModeOn()) return;

    if (isNode(event.target) || isEdge(event.target)) {
        await openModal(event.target);
    }


    if (isEmptySpace(event.target)) {
        await newNode(event.clientX, event.clientY, false);
        return;
    }
});



document.addEventListener("mousedown", async function (event) {
    debugLog("eventTarget: " + event.target + ' ' + event.target.id);
    isDragging = true;
    if (isModalModeOn()) {
        if (!isModal(event.target)) {
            closeModal();
        }
        return;
    }

    // selection box
    if (isEmptySpace(event.target)) {
        if (!event.ctrlKey) {
            cancelSelection();
        }

        createSelectionBox(event.clientX, event.clientY);
        return;
    }

    // single selection
    if (!event.ctrlKey && !isInSelection(event.target)) {
        cancelSelection();
    }
    select(event.target);

    if (isNode(event.target)) {
        if (event.altKey) {
            fakeEdgeFromId = event.target.id;
            updateFakeEdge(event.clientX, event.clientY, event.target);
            return;
        } else {
            startMoveNodeDivs(event.clientX, event.clientY);
        }
    }


});

document.addEventListener('mousemove', function (event) {
    if (isModalModeOn()) return;
    if (!isDragging) return;

    // selection box
    if (selectionBox) {
        event.preventDefault();
        expandSelectionBox(event.pageX, event.pageY);
        return;
    }

    // new edge
    if (fakeEdgeFromId) {
        event.preventDefault();
        updateFakeEdge(event.clientX, event.clientY, event.target);
        return;
    }

    moveNodeDivs(event.clientX, event.clientY);

});

document.addEventListener('mouseup', async function (event) {
    isDragging = false;
    if (isModalModeOn()) return;

    // selection box
    if (selectionBox) {
        selectWithSelectionBox();
        return;
    }

    if (fakeEdgeFromId) {
        newEdge(event.clientX, event.clientY, event.target);
        eraseFakeEdge();
        return;
    }

    commitMoveNodes();
});


document.addEventListener('keydown', async function (event) {
    if (isModalModeOn()) {
        if (event.key === 'Escape') {
            closeModal();
        }
        return;
    }
    // print graph
    if (event.key === 'g') {
        printGraphW.promise.then(function () {
            printGraphW();
        });
    }

    if (event.key === 'ArrowLeft') {
        await flipEdgePlugs(true);
    }

    if (event.key === 'ArrowRight') {
        await flipEdgePlugs(false);
    }

    // redo
    if (event.ctrlKey && event.key === 'y') {
        redoW.promise.then(function () {
            redoW();
        });
    }

    // undo
    if (event.ctrlKey && event.key === 'z') {
        undoW.promise.then(function () {
            undoW();
        });
    }

    // delete selection
    if (event.key === 'Delete') {
        await eraseSelection();
    }

});