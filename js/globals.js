let debug = 1;
let selectionNodes = new Set();
let selectionEdges = new Set();
let selectionBox = null;
let startX = null;
let startY = null;
let isDragging = false;
let fakeEdgeFromId = null;
let connectedEdges = [];
let isEditDataForNode = null;
let modalSourceId = null;
let reader = null;

function resetGlobals() {
    selectionNodes.clear();
    selectionEdges.clear();
    selectionBox = null;
    startX = null;
    startY = null;
    isDragging = false;
    fakeEdgeFromId = null;
    connectedEdges = [];
    isEditDataForNode = null;
    modalSourceId = null;
    reader = null;
}