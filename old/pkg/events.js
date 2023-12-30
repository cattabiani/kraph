
// Js 2 wasm functions

function updateNodeJ(id, label, x, y) {
    debugLog("update node " + id + " event cb");
    let div = document.getElementById(id);
    if (!div) {
        div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'node';
        div.id = id;
    }
    div.textContent = label;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    return div;
}

function moveEdge(id) {
    let edge = edges.get(id);
    if (edge) {
        edge.position();
    }
}

// function updateEdgeJ(id, label, fromId, toId, isFromPlug, isToPlug) {
//     debugLog("update edge " + id + " from " + fromId + " to " + toId + " event cb");
//     let from = document.getElementById(fromId);
//     let to = document.getElementById(toId);

//     let edge = edges.get(id);
//     if (!edge) {
//         edge = new LeaderLine(from, to);
//     } else {
//         edge.start = from;
//         edge.end = to;
//     }
//     edge.middleLabel = label;
//     edge.startPlug = isFromPlug ? 'arrow1' : 'behind';
//     edge.endPlug = isToPlug ? 'arrow1' : 'behind';

//     edges.set(id, edge);
// }


function updateInvDiv(x, y, isInvisible) {
    debugLog("update invDiv " + x + " " + y);

    if (!isInvisible) {
        invDiv.className = "node";
        invDiv.textContent = "New Node";
        invDiv.style.zIndex = 0;
    } else {
        invDiv.className = "invDiv";
        invDiv.textContent = "";
    }
    invDiv.style.left = x + 'px';
    invDiv.style.top = y + 'px';
}

function updateNewEdge(x, y, tgt) {
    if (!newEdge) return;
    debugLog("update new edge " + x + " " + y);

    let isInvisible = !isEmptySpace(tgt);
    updateInvDiv(x, y, isInvisible);

    newEdge.end = (isInvisible && tgt != newEdge.start) ? tgt : invDiv;
    newEdge.position();
}


function eraseNodeJ(id) {
    debugLog("erase node " + id + " event cb");
    let div = document.getElementById(id);
    if (div) {
        div.remove();
    }
    cancelSelection();
}

function eraseEdgeJ(id) {
    debugLog("erase edge " + id + " event cb");
    let edge = edges.get(id);
    if (edge) {
        edge.remove();
        edges.delete(id);
    }
}

// additional Js only events

function cancelSelection() {
    debugLog("cancel selection event");
    selection.forEach(elem => {
        if (elem && isNode(elem)) {
            elem.classList.remove('node-selected');
        }
    });
    selection.clear();
}

function select(elem) {
    debugLog("select node " + elem.id + " event");
    if (isNode(elem)) {
        elem.classList.add('node-selected');
    }
    selection.add(elem);
}

async function newNode(x, y) {
    let id = await newNodeW(x, y);
    debugLog("new node event " + id);
    let newNodeElement = document.getElementById(id);
    select(newNodeElement);
    return id;
}

function eraseSelection() {
    debugLog("erase selection event");
    let isTriggered = false;
    selection.forEach(elem => {
        if (isNode(elem)) {
            eraseNodeW.promise.then(function () {
                eraseNodeW(elem.id, isTriggered);
                isTriggered = true;
            });
        }
    });
    cancelSelection();
}

function moveSelection(dx, dy) {
    debugLog("move selection event");
    selection.forEach(elem => {
        if (isNode(elem)) {
            elem.style.left = (parseInt(elem.style.left, 10) + dx) + 'px';
            elem.style.top = (parseInt(elem.style.top, 10) + dy) + 'px';
        }
    });
    startX += dx;
    startY += dy;
}

function moveSelectionW() {
    debugLog("move selection event w");
    let isTriggered = false;
    selection.forEach(elem => {
        if (isNode(elem)) {
            moveNodeW(elem.id, parseInt(elem.style.left, 10), parseInt(elem.style.top, 10), isTriggered);
            isTriggered = true;
        }
    });
}

function createSelectionBox(x, y) {
    selectionBox = document.createElement('div');
    selectionBox.className = 'selection-box';
    document.body.appendChild(selectionBox);

    selectionBox.style.left = `${x}px`;
    selectionBox.style.top = `${y}px`;
    startX = x;
    startY = y;
}

function expandSelectionBox(xx, yy) {
    const x = Math.min(xx, startX);
    const y = Math.min(yy, startY);
    const w = Math.abs(xx - startX);
    const h = Math.abs(yy - startY);

    selectionBox.style.left = `${x}px`;
    selectionBox.style.top = `${y}px`;
    selectionBox.style.width = `${w}px`;
    selectionBox.style.height = `${h}px`;
}

async function selectWithSelectionBox() {
    const rect = selectionBox.getBoundingClientRect();
    Array.from(document.getElementsByClassName('node')).forEach(node => {
        const nodeRect = node.getBoundingClientRect();
        if (rect.left < nodeRect.right && rect.right > nodeRect.left &&
            rect.top < nodeRect.bottom && rect.bottom > nodeRect.top) {
            select(node);
        }
    });

    selectionBox.remove();
    selectionBox = null;
}