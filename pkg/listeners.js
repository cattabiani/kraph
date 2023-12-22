

// new node
document.addEventListener("dblclick", async function (event) {
    newNodeW.promise.then(function () {
        debugLog("new node action");
        newNodeW(event.clientX, event.clientY);
    });
});


document.addEventListener("mousedown", async function (event) { 
    if (isModalModeOn()) return;

    if (isEmptySpace(event.target)) {
        if (!event.ctrlKey) {
            cancelSelection();
        }
        
        createSelectionBox(event.clientX, event.clientY);
        isDragging = true;
        return;
    }

    if (isInSelection(event.target)) {
        // moving
        startX = event.clientX;
        startY = event.clientY;
        isDragging = true;
        
        return;
    }

    if (!event.ctrlKey) {
        cancelSelection();
    }

    if (isNode(event.target)) {
        select(event.target);
    }
});

document.addEventListener('mousemove', function (event) {

    if (!isDragging) return;
    if (isModalModeOn()) return;

    event.preventDefault();

    

    if (selectionBox) {
        // bounding box
        expandSelectionBox(event.pageX, event.pageY);
    } else {
        let dx = event.clientX-startX;
        let dy = event.clientY-startY;
        moveSelection(dx, dy);
    }
});

document.addEventListener('mouseup', function (event) {
    if (!isDragging) return;
    if (isModalModeOn()) return;
    if (selectionBox) {
        selectWithSelectionBox();
    } else {
        moveSelectionW();
    }



    
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


