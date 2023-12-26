let debug = 1;
let selection = new Set();
let selectionBox = null;
let startX, startY;
let isDragging = false;
let newEdge = null;
let invDiv = document.getElementById("invDiv");
let edges = new Map();