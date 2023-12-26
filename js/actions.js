async function newNode(x, y) {
    let id = await newNodeW(x, y);
    // let newNodeElement = document.getElementById(id);
    // select(newNodeElement);
    // return id;
}

function updateNodeJ(id, label, x, y) {
    debugLog("UpdateNodeJ " + id);
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
