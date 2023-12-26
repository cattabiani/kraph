

// new node
document.addEventListener("dblclick", async function (event) {
    if (isModalModeOn()) return;

    await newNode(event.clientX, event.clientY);

});


document.addEventListener("mousedown", async function (event) {
    isDragging = true;
    if (isModalModeOn()) return;

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
        newEdge = new LeaderLine(event.target, invDiv);
        newEdge.middleLabel = "New Edge";
        updateNewEdge(event.clientX, event.clientY, event.target);
    }
});

document.addEventListener('mousemove', function (event) {
    if (isModalModeOn()) return;
    if (!isDragging) return;

    if (selectionBox) {
        // bounding box
        event.preventDefault();
        expandSelectionBox(event.pageX, event.pageY);
        return;
    }
    if (!newEdge) {
        event.preventDefault();
        let dx = event.clientX - startX;
        let dy = event.clientY - startY;
        moveSelection(dx, dy);
        return;
    }

    updateNewEdge(event.clientX, event.clientY, event.target);
});

document.addEventListener('mouseup', async function (event) {
    isDragging = false;
    if (isModalModeOn()) return;

    if (selectionBox) {
        selectWithSelectionBox();
        return;
    }

    if (!newEdge && !selectionBox) {
        moveSelectionW();
    }



    if (newEdge) {

        var toId;
        let es = isEmptySpace(event.target);
        if (es) {
            toId = await newNode(event.clientX, event.clientY);
        } else {
            toId = event.target.id;
        }


        let fromId = newEdge.start.id;
        await newEdgeW(fromId, toId, es);

        newEdge.remove();
        newEdge = null;
        updateInvDiv(event.clientX, event.clientY, true);
    }


});



// print graph
document.addEventListener('keydown', async function (event) {
    if (isModalModeOn()) return;

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
    if (event.key === 'Delete') {
        eraseSelection();
    }
});


