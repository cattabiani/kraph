

// new node
document.addEventListener("dblclick", async function (event) {
    newNodeW.promise.then(function () {
        debugLog("new node action");
        newNodeW(event.clientX, event.clientY);
    });
});


document.addEventListener("mousedown", async function (event) { 
    if (isModalModeOn()) return;

    if (isEmptySpace(event.target) && !event.ctrlKey) {
        cancelSelection();
        return;
    }

    if (isInSelection(event.target)) {
        return;
    }

    if (!event.ctrlKey) {
        cancelSelection();
    }

    if (isNode(event.target)) {
        select(event.target);
    }
});

document.addEventListener("mousedown", async function (event) { 
    if (isModalModeOn()) return;
    if (!isEmptySpace(event.target)) return;

    createSelectionBox(event.clientX, event.clientY);
    isDragging = true;
});

document.addEventListener('mousemove', function (event) {
    if (!isDragging) return;
    if (isModalModeOn()) return;

    event.preventDefault();

    if (selectionBox) {
        expandSelectionBox(event.pageX, event.pageY);
    }
});

document.addEventListener('mouseup', function (event) {
    if (!isDragging) return;
    if (isModalModeOn()) return;
    if (!selectionBox) return;

    selectWithSelectionBox();
});


// erase node
document.addEventListener('keydown', async function (event) {
    if (!isModalModeOn() && event.key === 'Delete') {
        eraseSelection();
    }
});

// print graph
document.addEventListener('keydown', async function (event) {
    if (event.key === 'g') {
        printGraphW.promise.then(function () {
            printGraphW();
        });
    }
});

// print chronology
document.addEventListener('keydown', async function (event) {
    if (event.key === 'c') {
        printChronologyW.promise.then(function () {
            printChronologyW();
        });
    }
});

// redo
document.addEventListener('keydown', async function (event) {
    if (event.ctrlKey && event.key === 'y') {
        redoW.promise.then(function () {
            redoW();
        });
    }
});

// undo
document.addEventListener('keydown', async function (event) {
    if (event.ctrlKey && event.key === 'z') {
        undoW.promise.then(function () {
            undoW();
        });
    }
});


