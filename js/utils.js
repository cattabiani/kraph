function isModal(elem) {
    return document.getElementById('modal').contains(elem);
}

function isNode(elem) {
    return elem.matches('.node');
}

function isEdge(elem) {
    return elem.matches('.edge');
}

function isEmptySpace(elem) {
    return !isNode(elem) && !isModal(elem) && !isEdge(elem);
}

function isModalModeOn() {
    let modal = document.getElementById('modal');
    return modal.style.display === 'block';
}

function isInSelection(node) {
    for (const elem of selection) {
        if (elem.id === node.id) {
            return true;
        }
    }
    return false;
}


// Debug logging function
function debugLog(message) {
    if (debug) {
        console.log(message);
    }
}

function getMiddleLabelPosition(leaderLine) {
    let startRect = leaderLine.start.getBoundingClientRect();
    let endRect = leaderLine.end.getBoundingClientRect();

    // Calculate midpoint
    let midX = (startRect.left + endRect.left) / 2;
    let midY = (startRect.top + endRect.top) / 2;

    // If you have a reference to the middleLabel, you can adjust for its dimensions
    let labelRect = leaderLine.middleLabel.getBoundingClientRect();
    midX -= labelRect.width / 2;
    midY -= labelRect.height / 2;

    return { x: midX, y: midY };
}


function dir(obj) {
    let properties = new Set();
    let currentObj = obj;

    do {
        Object.getOwnPropertyNames(currentObj).forEach(item => properties.add(item));
        Object.getOwnPropertySymbols(currentObj).forEach(item => properties.add(item));
    } while ((currentObj = Object.getPrototypeOf(currentObj)));

    console.log([...properties]);
}

function areDivsOverlapping(div1, div2) {
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    return !(rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top);
}