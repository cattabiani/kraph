let debug = 1;
let selectionNodes = new Set();
let selectionEdges = new Set();
let selectionBox = null;
let startX = null;
let startY = null;
let isDragging = false;
let fakeEdgeFromId = null;
let connectedEdges = [];
let isModalForNode = null;
let modalSourceId = null;
