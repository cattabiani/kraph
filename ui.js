let activeNode = null;
let modalObjId = null;

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


async function openNodeModal(id) {
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
    modalObjId = id;
    n.delete(); // Ensure proper memory management
}


async function closeNodeModal() {
    let modal = document.getElementById('modal');
    let label = modal.querySelector("#Label-input").value;
    let info = modal.querySelector("#Info-textarea").value;
    modal.style.display = 'none';

    let n = await graphUpdateNode(modalObjId, label, info);
    if (n) {
        updateNode(n);
    }
    n.delete();

    modalObjId = null;
    modal.innerHTML = '';  // Clear content
}

function updateNode(n) {

    let id = n.getId();

    let div = document.getElementById(id);
    if (!div) {
        div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'node';
        div.id = id;
        div.addEventListener('mousedown', dragStart);

    }
    div.textContent = n.getLabel();
    div.style.left = n.getX() + 'px';
    div.style.top = n.getY() + 'px';
}





// listeners


function dragStart(e) {
    activeNode = e.target;
    document.addEventListener('mousemove', dragging);
    e.preventDefault(); // Prevent text selection
}

function dragging(e) {
    if (activeNode) {
        activeNode.style.left = e.clientX + 'px';
        activeNode.style.top = e.clientY + 'px';
    }
}

document.addEventListener('dblclick', async function (event) {
    if (!event.target.matches('.modal, .node')) {
        let n = await graphNewNode(event.clientX, event.clientY);
        updateNode(n);
        n.delete();
    } else if (event.target.matches('.node')) {
        await openNodeModal(event.target.id);
    }
});

document.addEventListener('mouseup', async function (event) {
    if (!activeNode) {
        return;
    }
    await graphMoveNode(activeNode.id, parseInt(activeNode.style.left, 10), parseInt(activeNode.style.top, 10));
    activeNode = null;
});

document.addEventListener('mousedown', async function (event) {
    if (!document.getElementById('modal').contains(event.target) && modalObjId) {
        await closeNodeModal();
    }
});

document.addEventListener('keydown', async function (event) {
    if (event.key === 'Escape' && !document.getElementById('modal').contains(event.target) && modalObjId) {
        await closeNodeModal();
    }
});