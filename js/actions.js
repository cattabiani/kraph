async function newNode(x, y) {
    let id = await newNodeW(x, y);
    let newNodeElement = document.getElementById(id);
    cancelSelection();
    select(newNodeElement);
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

function eraseSelection() {
    debugLog("eraseSelection");
    let l = selection.size;
    let idx = 0;
    selection.forEach(elem => {
        if (isNode(elem)) {
            eraseNodeW.promise.then(function () {
                eraseNodeW(elem.id, idx === l - 1);
            });
        }
        idx++;
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
