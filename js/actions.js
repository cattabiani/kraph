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
    selectionNodes.forEach(elem => {
        elem.classList.remove('node-selected');
    });
    selectionNodes.clear();
    selectionEdges.forEach(elem => {
        elem.classList.remove('edge-label-selected');
    });
    selectionEdges.clear();
}

async function eraseSelection() {
    debugLog("eraseSelection");
    let l = selectionEdges.size - 1;
    let idx = 0;
    selectionEdges.forEach(elem => {
        eraseEdgeW.promise.then(function () {
            eraseEdgeW(elem.id.split('-')[0], !(idx === l));
            idx++;
        });
    });
    selectionNodes.forEach(elem => {
        eraseNodeW.promise.then(function () {
            eraseNodeW(elem.id, !(idx === l));
            idx++;
        });
    });
    cancelSelection();
}


function select(elem) {
    if (!elem) return;
    debugLog("select " + elem.id);
    if (isNode(elem)) {
        elem.classList.add('node-selected');
        selectionNodes.add(elem);
    }

    if (isEdge(elem)) {
        elem.classList.add('edge-label-selected');
        selectionEdges.add(elem);
    }

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

    Array.from(document.getElementsByClassName('edge-label')).forEach(edge => {
        const edgeRect = edge.getBoundingClientRect();
        if (rect.left < edgeRect.right && rect.right > edgeRect.left &&
            rect.top < edgeRect.bottom && rect.bottom > edgeRect.top) {
            select(edge);
        }
    });

    selectionBox.remove();
    selectionBox = null;
}

function eraseNodeJ(id) {
    eraseId(id);

    cancelSelection();
}


async function newEdge(x, y, tgt) {
    var toId;
    if (!isNode(tgt)) {
        toId = await newNode(x, y, true);
    } else {
        toId = tgt.id;
    }

    await newEdgeW(fakeEdgeFromId, toId, false);
    fakeEdgeFromId = null;
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
    if (!from) {
        debugLog("From div " + fromId + " is missing!");
        return;
    }
    let to = document.getElementById(toId);
    if (!to) {
        debugLog("To div " + fromTo + " is missing!");
        return;
    }
    let pp = getConnectingLineExrtemes(from, to);
    let midPoint = pp.from.add(pp.to, 1.0).multiply(0.5);
    updateEdgeLine(id, pp.from, pp.to, fromId, toId, isFromPlug, isToPlug);
    updateEdgeLabel(id, label, midPoint);
}

function moveEdgeDiv(id) {
    let d = getEdgeLineData(id);
    let from = document.getElementById(d.fromId);
    let to = document.getElementById(d.toId);
    let pp = getConnectingLineExrtemes(from, to);
    let midPoint = pp.from.add(pp.to, 1.0).multiply(0.5);
    setEdgeLinePos(d.line, pp.from, pp.to);
    setEdgeLabelPos(d.text, midPoint);
}

function updateConnectedEdges() {
    connectedEdges.forEach(eid => {
        moveEdgeDiv(eid);
    });
}

function eraseEdgeJ(id) {
    eraseId(id + "-line");
    eraseId(id + "-label");
}



function updateFakeEdge(x, y, tgt) {
    let isTgtNode = isNode(tgt);
    updateInvDiv(x, y, isTgtNode);


    let toId = (isTgtNode && tgt.id != fakeEdgeFromId) ? tgt.id : "invDiv";
    updateEdgeJ("fakeEdge", "New Edge", fakeEdgeFromId, toId, false, true);
}

function eraseFakeEdge() {
    eraseId("fakeEdge-line");
    eraseId("fakeEdge-label");
    updateInvDiv(0, 0, true);
}


function startMoveNodeDivs(x, y) {
    startX = x;
    startY = y;
    connectedEdges = getConnectedEdgesW(Array.from(selectionNodes).map(div => div.id));
}

function moveNodeDivs(x, y) {

    let dx = x - startX;
    let dy = y - startY;

    selectionNodes.forEach(div => {
        div.style.left = (parseInt(div.style.left, 10) + dx) + 'px';
        div.style.top = (parseInt(div.style.top, 10) + dy) + 'px';
    });

    startX = x;
    startY = y;

    updateConnectedEdges();
}

async function commitMoveNodes() {
    moveNodeW.promise.then(function () {
        let l = selectionNodes.size - 1;
        let idx = 0;
        selectionNodes.forEach(elem => {
            let x = parseInt(elem.style.left, 10);
            let y = parseInt(elem.style.top, 10);
            moveNodeW(elem.id, x, y, !(idx === l));
            idx++;
        });
        startX = null;
        startY = null;
        connectedEdges = [];
    });
}

async function flipEdgePlugs(isFrom) {
    flipEdgePlugW.promise.then(function () {
        let l = selectionEdges.size - 1;
        let idx = 0;
        selectionEdges.forEach(elem => {
            console.log(elem.id.split('-')[0]);
            flipEdgePlugW(elem.id.split('-')[0], isFrom, !(idx === l));
        });
        ++idx;
    });
}

function fillModalAndOpenJ(id, label, info, isNode) {
    debugLog("fillModalAndOpenJ");
    let modal = document.getElementById('modal');

    // Clear existing content in the modal
    modal.innerHTML = '';

    // Set the sourceId attribute
    modal.setAttribute('sourceId', id);
    modal.setAttribute('isNode', isNode);

    // Create a form
    let form = document.createElement('form');

    // Create label input
    let labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.className = 'input-label';
    labelInput.value = label;
    form.appendChild(labelInput);

    // Create info textarea
    let infoTextarea = document.createElement('textarea');
    infoTextarea.className = 'input-info';
    infoTextarea.value = info;
    form.appendChild(infoTextarea);

    // Append form to modal
    modal.appendChild(form);

    // Display the modal
    modal.style.display = 'block';
}

async function openModal(elem) {
    debugLog("activateModal " + elem.id);
    if (isNode(elem)) {
        editNodeW.promise.then(function () {
            editNodeW(elem.id);
        });
    } else {
        editEdgeW.promise.then(function () {
            editEdgeW(elem.id.split('-')[0]);
        });
    }

}

function closeModal() {
    debugLog("deactivateModal");
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}
