

// new node
document.addEventListener("dblclick", async function (event) {
    newNodeW.promise.then(function () {
        debugLog("new node action");
        newNodeW(event.clientX, event.clientY);
    });
});


document.addEventListener("mousedown", async function (event) {
    if (isModalModeOn()) return;

    isDragging = true;
    if (isEmptySpace(event.target)) {
        if (!event.ctrlKey) {
            cancelSelection();
        }

        createSelectionBox(event.clientX, event.clientY);
        return;
    }

    if (isInSelection(event.target) && !event.altKey) {
        // moving
        startX = event.clientX;
        startY = event.clientY;
        return;
    }

    if (!event.ctrlKey) {
        cancelSelection();
    }

    if (isNode(event.target)) {
        select(event.target);
    }

    if (event.altKey) {
        updateInvDiv(event.clientX, event.clientY);
        updateEdgeJ("", "New Edge", event.target, invDiv, false, true);
    }
});

document.addEventListener('mousemove', function (event) {

    if (isDragging && selectionBox && !isModalModeOn()) {
        // bounding box
        event.preventDefault();
        expandSelectionBox(event.pageX, event.pageY);
    }
    if (isDragging && !selectionBox && !newEdge && !isModalModeOn()) {
        event.preventDefault();
        let dx = event.clientX - startX;
        let dy = event.clientY - startY;
        moveSelection(dx, dy);
    }
    if (isDragging && newEdge) {
        updateInvDiv(event.clientX, event.clientY);
        newEdge.position();
        console.log("new line move");
    }
});

document.addEventListener('mouseup', function (event) {
    if (selectionBox) {
        selectWithSelectionBox();
    }

    if (isDragging && !newEdge && !selectionBox && !isModalModeOn()) {
        moveSelectionW();
    }

    if (newEdge) {
        console.log("lock new node here " + event.clientX + ' ' + event.clientY);
        newEdge.remove();
        newEdge = null;
    }

    isDragging = false;
});



// print graph
document.addEventListener('keydown', async function (event) {
    if (event.key === 'g') {
        printGraphW.promise.then(function () {
            printGraphW();
        });
    }
    if (event.key === 'c') {
        printChronologyW.promise.then(function () {
            printChronologyW();
        });
    }
    if (event.ctrlKey && event.key === 'y') {
        redoW.promise.then(function () {
            redoW();
        });
    }
    if (event.ctrlKey && event.key === 'z') {
        undoW.promise.then(function () {
            undoW();
        });
    }
    if (!isModalModeOn() && event.key === 'Delete') {
        eraseSelection();
    }
});


