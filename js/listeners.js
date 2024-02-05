// new node
document.addEventListener("dblclick", async function (event) {
    if (isEditDataModeOn()) return;
    if (isInfoMenuOn()) return;

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
    if (isEditDataModeOn()) {
        if (!isEditData(event.target)) {
            await closeModal();
        }
        return;
    }
    if (isInfoMenuOn()) {
        if (!isInfoMenu(event.target)) {
            document.getElementById('infoMenu').style.display = 'none';
        }
        return;
    }
    event.preventDefault();


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
        if (event.ctrlKey) {
            fakeEdgeFromId = event.target.id;
            updateFakeEdge(event.clientX, event.clientY, event.target);
            return;
        } else {
            startMoveNodeDivs(event.clientX, event.clientY);
        }
    }


});

document.addEventListener('mousemove', function (event) {
    if (isEditDataModeOn()) return;
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
    if (isEditDataModeOn()) return;

    // selection box
    if (selectionBox) {
        selectWithSelectionBox();
        return;
    }

    if (fakeEdgeFromId) {
        await newEdge(event.clientX, event.clientY, event.target);
        eraseFakeEdge();
        return;
    }

    commitMoveNodes();
});


document.addEventListener('keydown', async function (event) {
    if (isEditDataModeOn() && event.key === 'Escape') {
        await closeModal();
        return;
    }

    if (isInfoMenuOn() && event.key === 'Escape') {
        document.getElementById('infoMenu').style.display = 'none';
        return;
    }

    if (event.key === 'g') {
        getGraphJsonW.promise.then(function () {
            let gg = getGraphJsonW();
            gg = JSON.stringify(JSON.parse(gg), null, 4);
            console.log(gg);
        });
    }

    if (!isEditDataModeOn() && event.key === 'ArrowLeft') {
        await flipEdgePlugs(true);
    }

    if (!isEditDataModeOn() && event.key === 'ArrowRight') {
        await flipEdgePlugs(false);
    }

    // redo
    if (!isEditDataModeOn() && event.ctrlKey && event.key === 'y') {
        redoW.promise.then(function () {
            redoW();
        });
    }

    // undo
    if (!isEditDataModeOn() && event.ctrlKey && event.key === 'z') {
        undoW.promise.then(function () {
            undoW();
        });
    }

    // delete selection
    if (!isEditDataModeOn() && event.key === 'Delete') {
        await eraseSelection();
    }

});

document.getElementById('infoButton').addEventListener('click', function () {
    document.getElementById('infoMenu').style.display = 'block';
});

document.getElementById('saveButton').addEventListener('click', function () {
    console.log("TODO");
});

document.getElementById('loadButton').addEventListener('click', function () {
    console.log("TODO");
});

document.getElementById('downloadButton').addEventListener('click', function () {
    console.log("TODO");
});

document.getElementById('uploadButton').addEventListener('click', function () {
    console.log("TODO");
});