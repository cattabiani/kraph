



// updateNodeJ("1", "me", 500, 500);
// updateNodeJ("2", "New Node 2", 800, 800);

// updateEdgeJ("3", "bau", "1", "2", true, true);

// let pp = getDivPoints(div1);



// pp.center.draw(svg);
// pp.left.draw(svg);
// pp.right.draw(svg);
// pp.top.draw(svg);
// pp.bottom.draw(svg);

// console.log(areDivsOverlapping(div1, div2));





















// function findClosestPoints(div1, div2) {
//     // Get the bounding rectangles
//     const rect1 = div1.getBoundingClientRect();
//     const rect2 = div2.getBoundingClientRect();


//     return { from: point1, to: point2 };
// }


// function drawPoint(p) {
//     let x1 = p.x;
//     let y1 = p.y;
//     // Create the SVG element
//     var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("width", "2000");
//     svg.setAttribute("height", "2000");
//     // svg.setAttribute("zIndex", "2");

//     // Function to create a point (circle)
//     function createPoint(x, y) {
//         var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         circle.setAttribute("cx", x);
//         circle.setAttribute("cy", y);
//         circle.setAttribute("r", "5"); // Radius of the point
//         circle.setAttribute("fill", "red"); // Color of the point

//         return circle;
//     }

//     // Create and append the first point
//     var point1 = createPoint(x1, y1);
//     svg.appendChild(point1);

//     // Append the SVG to the body of the document (or another element of your choice)
//     document.body.appendChild(svg);
// }



// class CustomLine {
//     constructor(startElement, endElement, id) {
//         this.startElement = startElement;
//         this.endElement = endElement;
//         this.id = id;

//         // Create the LeaderLine
//         this.line = new LeaderLine(startElement, endElement);

//         // Create the div for the middle label
//         this.div = document.createElement('div');
//         this.div.id = id; // Unique ID for the div
//         this.div.className = 'edge';
//         this.div.textContent = "New Edge";
//         document.body.appendChild(this.div);




//         // Update positions
//         this.update();
//     }

//     update() {
//         // Position the div
//         const startRect = this.startElement.getBoundingClientRect();
//         const endRect = this.endElement.getBoundingClientRect();
//         const middleX = (startRect.left + endRect.left) / 2;
//         const middleY = (startRect.top + endRect.top) / 2;

//         this.div.style.left = middleX + 'px';
//         this.div.style.top = middleY + 'px';

//         // Reposition the LeaderLine if needed
//         this.line.position();
//     }

//     // ... Additional methods like for updating the label, removing the line, etc.
// }

// function findClosestSide(div1, div2) {
//     // Helper function to get the center point of an element
//     function getCenter(element) {
//         const rect = element.getBoundingClientRect();
//         return {
//             x: rect.left + rect.width / 2,
//             y: rect.top + rect.height / 2
//         };
//     }

//     // Get the center points of div1 and div2
//     const centerDiv1 = getCenter(div1);
//     const centerDiv2 = getCenter(div2);

//     // Calculate the centers of each side of div1
//     const rectDiv1 = div1.getBoundingClientRect();
//     const topCenter = { x: centerDiv1.x, y: rectDiv1.top };
//     const bottomCenter = { x: centerDiv1.x, y: rectDiv1.bottom };
//     const leftCenter = { x: rectDiv1.left, y: centerDiv1.y };
//     const rightCenter = { x: rectDiv1.right, y: centerDiv1.y };

//     // Helper function to calculate distance between two points
//     function distance(point1, point2) {
//         return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
//     }

//     // Calculate distances to each side from center of div2
//     const distances = {
//         top: distance(topCenter, centerDiv2),
//         bottom: distance(bottomCenter, centerDiv2),
//         left: distance(leftCenter, centerDiv2),
//         right: distance(rightCenter, centerDiv2)
//     };

//     // Determine the closest side
//     return Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);
// }

// function findClosestSideToAnySide(div1, div2) {
//     // Helper function to get the center point of a side
//     function getSideCenter(rect, side) {
//         switch (side) {
//             case 'top': return { x: rect.left + rect.width / 2, y: rect.top };
//             case 'bottom': return { x: rect.left + rect.width / 2, y: rect.bottom };
//             case 'left': return { x: rect.left, y: rect.top + rect.height / 2 };
//             case 'right': return { x: rect.right, y: rect.top + rect.height / 2 };
//             default: return null;
//         }
//     }

//     // Helper function to calculate distance between two points
//     function distance(point1, point2) {
//         return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
//     }

//     // Get the bounding rectangles of the divs
//     const rectDiv1 = div1.getBoundingClientRect();
//     const rectDiv2 = div2.getBoundingClientRect();

//     // Initialize variables to track the closest side and minimum distance
//     let closestSide = null;
//     let minDistance = Infinity;

//     // Compare each side of div1 with each side of div2
//     ['top', 'bottom', 'left', 'right'].forEach(sideDiv1 => {
//         const centerDiv1 = getSideCenter(rectDiv1, sideDiv1);

//         ['top', 'bottom', 'left', 'right'].forEach(sideDiv2 => {
//             const centerDiv2 = getSideCenter(rectDiv2, sideDiv2);
//             const currentDistance = distance(centerDiv1, centerDiv2);

//             if (currentDistance < minDistance) {
//                 minDistance = currentDistance;
//                 closestSide = sideDiv1;
//             }
//         });
//     });

//     return closestSide;
// }







// let pp = findClosestPoints(div1, div2);
// drawPoints(pp.from.x, pp.from.y, pp.to.x, pp.to.y);
// div1.style.display = 'none';
// div2.style.display = 'none';
// console.log("AAA ", pp.from.x, pp.from.y, pp.to.x, pp.to.y);






// // let ll = new CustomLine(div1, div2, "3");
// // updateNodeJ("2", "New Node 2", 200, 300);
// // ll.update();


// let ll1 = new LeaderLine(div1, div2);
// ll1.middleLabel = "bau";
// ll1.position();

// let div = document.createElement('div');
// document.body.appendChild(div);
// div.className = 'edge';
// let cp = findCenterPoint(div1, div2);
// div.style.left = cp.x - 50 + "px";
// div.style.top = cp.y - 25 + "px";

// dir(ll1);
// console.log(ll1.anchorSE());
// let cp = findCenterPoint(div1, div2);
// updateNodeJ("9", "middle", cp.x, cp.y);

// console.log(findClosestSide(div1, div2));
// console.log(findClosestSideToAnySide(div1, div2));
// // ll1.middleLabel = "New Edge 2";
// // ll2 = new LeaderLine(div2, div1);
// // ll1.middleLabel = "New Edge 2";
// // console.log(ll2)
// // updateNodeJ("2", "New Node 2", 300, 300);

// // Create the first div
// let div1 = document.createElement('div');
// div1.id = 'uuid_1';
// div1.className = 'node';
// div1.textContent = 'New Node';
// document.body.appendChild(div1);

// // Create the second div
// let div2 = document.createElement('div');
// div2.id = 'uuid_2';
// div2.className = 'node';
// div2.textContent = 'New Node';
// document.body.appendChild(div2);


// // Create the SVG element
// const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svg.id = 'uuid_3';
// svg.setAttribute('width', '400');
// svg.setAttribute('height', '200');
// svg.style.position = 'absolute';
// svg.style.top = '0';
// svg.style.left = '0';

// // Create the arrow line

// // Create the defs and marker for the arrowhead
// const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
// const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
// marker.setAttribute('id', 'arrowhead');
// marker.setAttribute('markerWidth', '10');
// marker.setAttribute('markerHeight', '7');
// marker.setAttribute('refX', '10');
// marker.setAttribute('refY', '3.5');
// marker.setAttribute('orient', 'auto');
// const arrowhead = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
// arrowhead.setAttribute('points', '0 0, 10 3.5, 0 7');
// arrowhead.style.fill = 'black';
// marker.appendChild(arrowhead);
// defs.appendChild(marker);

// // Create the line with the arrowhead
// const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
// line.setAttribute('x1', '100');
// line.setAttribute('y1', '50');
// line.setAttribute('x2', '200');
// line.setAttribute('y2', '50');
// line.style.stroke = 'black';
// line.style.strokeWidth = '2';
// line.setAttribute('marker-end', 'url(#arrowhead)');
// svg.appendChild(defs);
// svg.appendChild(line);

// // Create the text label for the arrow
// const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
// text.setAttribute('x', '150');
// text.setAttribute('y', '45');
// text.textContent = 'New Edge';
// text.style.fontSize = '12px';
// svg.appendChild(text);

// // Append the SVG to the document
// document.body.appendChild(svg);



