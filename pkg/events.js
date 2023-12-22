
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

function eraseNodeJ(id) {
    debugLog("erase node " + id + " event cb");
    let div = document.getElementById(id);
    if (div) {
        div.remove();
    }
    cancelSelection();
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

function eraseSelection() {
    debugLog("erase selection event");
    selection.forEach(elem => {
        if (isNode(elem)) {
            eraseNodeW.promise.then(function () {
                eraseNodeW(elem.id);
            });
        }
    });
    cancelSelection();
}

function createSelectionBox(x, y) {
    selectionBox = document.createElement('div');
    selectionBox.className = 'selection-box';
    document.body.appendChild(selectionBox);

    selectionBox.style.left = `${x}px`;
    selectionBox.style.top = `${y}px`;
    selectionBoxStartX = x;
    selectionBoxStartY = y;
}

function expandSelectionBox(xx, yy) {
    const x = Math.min(xx, selectionBoxStartX);
    const y = Math.min(yy, selectionBoxStartY);
    const w = Math.abs(xx - selectionBoxStartX);
    const h = Math.abs(yy - selectionBoxStartY);

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
    isDragging = false;
}