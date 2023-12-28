async function newNode(x, y, isTriggered) {
    let id = await newNodeW(x, y, isTriggered);
    let newNodeElement = document.getElementById(id);
    cancelSelection();
    select(newNodeElement);
    return id;
}

function updateNodeJ(id, label, x, y) {
    debugLog("updateNodeJ " + id);
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

function cancelSelection() {
    debugLog("cancelSelection");
    selection.forEach(elem => {
        if (elem && isNode(elem)) {
            elem.classList.remove('node-selected');
        }
    });
    selection.clear();
}

async function eraseSelection() {
    debugLog("eraseSelection");
    let l = selection.size - 1;
    let idx = 0;
    selection.forEach(elem => {
        if (isNode(elem)) {
            eraseNodeW.promise.then(function () {
                eraseNodeW(elem.id, !(idx === l));
                idx++;
            });
        }
    });
    cancelSelection();
}


function select(elem) {
    debugLog("select " + elem.id);
    if (isNode(elem)) {
        elem.classList.add('node-selected');
    }
    selection.add(elem);
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

function eraseNodeJ(id) {
    debugLog("eraseNodeJ " + id);
    let div = document.getElementById(id);
    if (div) {
        div.remove();
    }
    cancelSelection();
}

function updateNewLL(x, y, tgt) {
    if (!newLL) return;

    let isInvisible = !isEmptySpace(tgt);
    updateInvDiv(x, y, isInvisible);

    newLL.end = (isInvisible && tgt != newLL.start) ? tgt : invDiv;
    newLL.position();
}

async function newEdge(x, y, tgt) {
    var toId;
    if (isEmptySpace(tgt)) {
        toId = await newNode(x, y, true);
    } else {
        toId = tgt.id;
    }


    let fromId = newLL.start.id;
    await newEdgeW(fromId, toId, false);

    newLL.remove();
    newLL = null;
    updateInvDiv(x, y, true);
}

function updateInvDiv(x, y, isInvisible) {

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

function updateEdgeJ(id, label, fromId, toId, isFromPlug, isToPlug) {
    debugLog("updateEdgeJ " + id + " from " + fromId + " to " + toId);
    let from = document.getElementById(fromId);
    let to = document.getElementById(toId);

    let edge = edges.get(id);
    var div;
    if (!edge) {
        edge = new LeaderLine(from, to);
        div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'edge';
        div.id = id;
    } else {
        edge.start = from;
        edge.end = to;
        div = document.getElementById(id);
    }

    div.textContent = label;
    let v = getMiddleLabelPosition(edge);
    div.style.left = v.x + 'px';
    div.style.top = v.y + 'px';
    // edge.middleLabel = label;
    edge.startPlug = isFromPlug ? 'arrow1' : 'behind';
    edge.endPlug = isToPlug ? 'arrow1' : 'behind';

    edges.set(id, edge);
}






function eraseEdgeJ(id) {
    debugLog("eraseEdgeJ " + id);
    let edge = edges.get(id);
    let div = document.getElementById(id);
    div.remove();
    if (edge) {
        edge.remove();
        edges.delete(id);
    }
}

