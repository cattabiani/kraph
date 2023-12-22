

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
    return modal.style.display === 'block';
}

function isInSelection(node) {
    selection.forEach(elem => {
        if (elem.id === node.id) {
            return true;
        }
    });
    return false;
}


// Debug logging function
function debugLog(message) {
    if (debug) {
        console.log(message);
    }
}

