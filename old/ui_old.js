let selectionBox = null;
let selectionBoxStartX, selectionBoxStartY;
let selectedElements = [];
let isDragging = false;
let moveStartX, moveStartY;
let lines = new Map();
let selectedLines = new Set();



function createInputContainer(labelName, type, value) {
    let inputId = labelName + '-' + type;
    // Container for label input
    let inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    inputContainer.id = 'input-container-' + labelName;

    // Create label for label input
    let label = document.createElement('label');
    label.htmlFor = inputId;
    label.textContent = labelName;
    inputContainer.appendChild(label);

    // Create input for label
    let input = document.createElement(type);
    input.type = 'text';
    input.value = value;
    input.id = inputId;
    inputContainer.appendChild(input);
    return inputContainer;
}


async function openNodeModal() {
    id = selectedElements[0].id;
    let n = await graphGetNode(id);
    if (!n) {
        console.log("Node " + id + " not found!");
        return;
    }

    let modal = document.getElementById('modal');
    modal.innerHTML = '';  // Clear previous content


    modal.appendChild(createInputContainer("Label", 'input', n.getLabel()));
    modal.appendChild(createInputContainer("Info", 'textarea', n.getInfo()));


    // Display the modal
    modal.style.display = 'block';
    n.delete(); // Ensure proper memory management
}


async function closeNodeModal() {
    let id = selectedElements[0].id;

    let modal = document.getElementById('modal');
    let label = modal.querySelector("#Label-input").value;
    let info = modal.querySelector("#Info-textarea").value;
    modal.style.display = 'none';

    let n = await graphUpdateNode(id, label, info);
    if (n) {
        updateNode(n);
    }
    n.delete();

    modal.innerHTML = '';  // Clear content
    await updateSelectedLines();
    cancelSelection();
}

function updateNode(n) {

    let id = n.getId();

    let div = document.getElementById(id);
    if (!div) {
        div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'node';
        div.id = id;
        // div.addEventListener('mousedown', dragStart);

    }
    div.textContent = n.getLabel();
    div.style.left = n.getX() + 'px';
    div.style.top = n.getY() + 'px';
    return div;
}

function highlightSelection() {
    selectedElements.forEach(elem => {
        if (isNode(elem)) {
            elem.classList.add('node-selected');
        }

    });
}

function cancelSelection() {
    selectedElements.forEach(elem => {
        if (isNode(elem)) {
            elem.classList.remove('node-selected');
        }
    });
    selectedElements = [];
}

function isModal(elem) {
    return document.getElementById('modal').contains(elem);
}

function isNode(elem) {
    return elem.matches('.node');
}

function isEmptySpace(elem) {
    return !isNode(elem) && !isModal(elem);
}

function isModalModeOn() {
    let modal = document.getElementById('modal');

    // Check if the modal's display style is 'block'
    return modal.style.display === 'block';
}

function createSelectionBox(event) {
    selectionBox = document.createElement('div');
    selectionBox.className = 'selection-box';
    document.body.appendChild(selectionBox);

    selectionBox.style.left = `${event.clientX}px`;
    selectionBox.style.top = `${event.clientY}px`;
    selectionBoxStartX = event.clientX;
    selectionBoxStartY = event.clientY;
}

async function selectElementsInSelectionBox() {
    if (!selectionBox) {
        return;
    }

    const rect = selectionBox.getBoundingClientRect();
    selectedElements = Array.from(document.getElementsByClassName('node'))
        .filter(node => {
            const nodeRect = node.getBoundingClientRect();
            return rect.left < nodeRect.right && rect.right > nodeRect.left &&
                rect.top < nodeRect.bottom && rect.bottom > nodeRect.top;
        });

    highlightSelection();
    await updateSelectedLines();

    selectionBox.remove();
    selectionBox = null;
}

function isNodeInSelectedElements(node) {
    // Iterate over the selectedElements array
    return selectedElements.some(elem => elem.id === node.id);
}

function expandSelectionBox(event) {
    const x = Math.min(event.pageX, selectionBoxStartX);
    const y = Math.min(event.pageY, selectionBoxStartY);
    const w = Math.abs(event.pageX - selectionBoxStartX);
    const h = Math.abs(event.pageY - selectionBoxStartY);

    selectionBox.style.left = `${x}px`;
    selectionBox.style.top = `${y}px`;
    selectionBox.style.width = `${w}px`;
    selectionBox.style.height = `${h}px`;
}

function moveSelectedElements(event) {
    let dx = event.clientX - moveStartX;
    let dy = event.clientY - moveStartY;

    selectedElements.forEach(node => {
        node.style.left = (parseInt(node.style.left, 10) + dx) + 'px';
        node.style.top = (parseInt(node.style.top, 10) + dy) + 'px';
    });
    moveStartX = event.clientX;
    moveStartY = event.clientY;

    selectedLines.forEach(line => {
        line.position();
    });
}

async function newEdge(from, to) {
    let edge = await graphNewEdge(from.id, to.id);
    if (!edge) {
        console.log("The New Edge is missing!");
    }

    let ll = new LeaderLine(from, to);
    lines.set(edge.getId(), ll);
    selectedLines.add(ll);
    edge.delete();
}

async function createLinkedNode(event) {
    cancelSelection();
    let fromNode = event.target;

    let n = await graphNewNode(event.clientX, event.clientY);
    let endNode = updateNode(n);

    newEdge(fromNode, endNode);
    selectedElements.push(endNode);

    n.delete();
}

async function updateSelectedLines() {
    selectedLines.clear();
    for (const elem of selectedElements) {
        if (isNode(elem)) {
            let n = await graphGetNode(elem.id);

            for (const edgeId of n.getEdges()) {
                selectedLines.add(lines.get(edgeId)); // Add each edge ID to the Set
            }

        }
    }

}

// listeners



document.addEventListener('mousedown', async function (event) {
    isDragging = true;
    moveStartX = event.clientX;
    moveStartY = event.clientY;

    // modal behavior
    if (isModalModeOn()) {
        if (!isModal(event.target)) {
            await closeNodeModal();
        }
        return;
    }

    // node behavior
    if (isNode(event.target)) {
        if (isNodeInSelectedElements(event.target)) {
            if (event.ctrlKey) {
                await createLinkedNode(event);
                await updateSelectedLines();
            }
            return;
        }

        if (!event.ctrlKey) {
            cancelSelection();
        }
        node = event.target;
        selectedElements.push(node);
        highlightSelection();
        await updateSelectedLines();

        if (event.ctrlKey && selectedElements.length == 2) {
            newEdge(selectedElements[0], selectedElements[1]);
        }

        return;
    }

    // selection box behavior
    if (isEmptySpace(event.target)) {
        cancelSelection();
        createSelectionBox(event);
        return;
    }
});

document.addEventListener('mousemove', function (event) {
    if (!isDragging) {
        return;
    }
    if (isModalModeOn()) {
        return;
    }

    event.preventDefault();

    if (selectionBox) {
        expandSelectionBox(event);
        return;
    }

    moveSelectedElements(event);
});

document.addEventListener('mouseup', async function (event) {
    isDragging = false;

    for (const elem of selectedElements) {
        if (isNode(elem)) {
            await graphMoveNode(elem.id, parseInt(elem.style.left, 10), parseInt(elem.style.top, 10));
        }
    };

    // Calculate which nodes are selected
    await selectElementsInSelectionBox();
});

document.addEventListener('dblclick', async function (event) {
    // do nothing on modal mode
    if (isModalModeOn()) {
        return;
    }

    // node behavior
    if (isNode(event.target)) {
        if (isNode(selectedElements[0])) {
            await openNodeModal();
        }

        return;
    }

    // empty space behavior
    if (isEmptySpace(event.target)) {
        let n = await graphNewNode(event.clientX, event.clientY);
        updateNode(n);
        n.delete();
    }
});

document.addEventListener('keydown', async function (event) {
    // modal mode
    if (isModalModeOn()) {
        if (event.key === 'Escape') {
            await closeNodeModal();
        }
        return;
    }

    if (event.key === 'Escape') {
        await cancelSelection();
        return;
    }
});

