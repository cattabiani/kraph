// new node
document.addEventListener("dblclick", async function (event) {
    if (isModalModeOn()) return;
    if (!isEmptySpace(event.target)) return;

    await newNode(event.clientX, event.clientY);
});



document.addEventListener("mousedown", async function (event) {
    isDragging = true;
    if (isModalModeOn()) return;

    // selection box
    if (isEmptySpace(event.target)) {
        if (!event.ctrlKey) {
            cancelSelection();
        }

        createSelectionBox(event.clientX, event.clientY);
        return;
    }

    // single selection
    if (isNode(event.target)) {
        if (!event.ctrlKey) {
            cancelSelection();
        }
        select(event.target);
        return;
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
});

document.addEventListener('mouseup', async function (event) {
    isDragging = false;
    if (isModalModeOn()) return;

    // selection box
    if (selectionBox) {
        selectWithSelectionBox();
        return;
    }
});


document.addEventListener('keydown', async function (event) {
    if (isModalModeOn()) return;

    // print graph
    if (event.key === 'g') {
        printGraphW.promise.then(function () {
            printGraphW();
        });
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
        eraseSelection();
    }
});