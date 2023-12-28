class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    multiply(v) {
        return new Point(this.x * v, this.y * v);
    }

    add(p, v = 1.0) {
        return new Point(this.x + p.x * v, this.y + p.y * v);
    }

    l2norm() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Method to display point coordinates
    toString() {
        return `(${this.x}, ${this.y})`;
    }

    draw() {
        let svg = document.getElementById('svgContainer');
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", this.x);
        circle.setAttribute("cy", this.y);
        circle.setAttribute("r", "5"); // Radius of the point
        circle.setAttribute("fill", "red"); // Color of the point
        svg.appendChild(circle);
        document.body.appendChild(svg);
    }

}


class Line {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }


    // Method to display point coordinates
    toString() {
        return `(${this.from}, ${this.to})`;
    }

    draw() {
        let svg = document.getElementById('svgContainer');
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.classList.add("edge");

        line.setAttribute("x1", this.from.x);
        line.setAttribute("y1", this.from.y);
        line.setAttribute("x2", this.to.x);
        line.setAttribute("y2", this.to.y);

        svg.appendChild(line);
    }

}



class Edge extends Line {
    constructor(id, label, from, to, isFromPlug, isToPlug) {
        super(from, to);
        this.id = id;
        this.label = label;
        this.isFromPlug = isFromPlug;
        this.isToPlug = isToPlug;
    }

    // Method to display point coordinates
    toString() {
        return `(${this.id}, ${this.label}, ${this.from}, ${this.to}, ${this.isFromPlug}, ${this.isToPlug})`;
    }

    draw() {
        let svg = document.getElementById('svgContainer');
        var line = document.getElementById(this.id + "-line");
        if (!line) {
            line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.classList.add("edge");
        }
        line.setAttribute("x1", this.from.x);
        line.setAttribute("y1", this.from.y);
        line.setAttribute("x2", this.to.x);
        line.setAttribute("y2", this.to.y);

        line.setAttribute("marker-end", this.isToPlug ? "url(#arrow)" : "none");
        line.setAttribute("marker-start", this.isFromPlug ? "url(#arrow)" : "none");
        line.setAttribute("id", this.id + "-line");

        svg.appendChild(line);

        var text = document.getElementById(this.id);
        if (text) {
            text.textContent = this.label;
        } else {
            let midPoint = this.from.add(this.to, 1.0).multiply(0.5);
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", midPoint.x);
            text.setAttribute("y", midPoint.y - 10); // Adjust Y position to be above the line
            text.textContent = this.label;
            text.setAttribute("id", this.id);
            text.classList.add("edge-label"); // Add a class for styling

            svg.appendChild(text);
        }
    }

}






function getDivPoints(div) {
    let rect = div.getBoundingClientRect();

    let centerX = Math.round(rect.left + rect.width / 2);
    let centerY = Math.round(rect.top + rect.height / 2);
    let gap = 3;

    return {
        center: new Point(centerX, centerY),
        top: new Point(centerX, Math.floor(rect.top) - gap),
        bottom: new Point(centerX, Math.ceil(rect.bottom) + gap),
        left: new Point(Math.floor(rect.left) - gap, centerY),
        right: new Point(Math.ceil(rect.right) + gap, centerY)
    };
}



function getCenter(rect) {
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;
    return new Point(centerX, centerY);
}


function getConnectingLine(div1, div2) {
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();
    let p1 = getCenter(rect1);
    let p2 = getCenter(rect2);

    if (areDivsOverlapping(div1, div2)) {
        return { from: p1, to: p2 };
    }

    let dp = p2.add(p1, -1.0);

    let pFrom = new Point(p1.x, p1.y);
    let pTo = new Point(p2.x, p2.y);
    // // Check vertical overlap
    if (dp.y !== 0) {
        let yFrom = (dp.y > 0) ? rect1.bottom : rect1.top;
        let xFrom = p1.x + dp.x * (yFrom - p1.y) / dp.y;
        pFrom = new Point(xFrom, yFrom);

        let yTo = (dp.y > 0) ? rect2.top : rect2.bottom;
        let xTo = p2.x + dp.x * (yTo - p2.y) / dp.y;
        pTo = new Point(xTo, yTo);
    }

    // Check horizontal overlap
    if (dp.x !== 0) {
        let xFrom = (dp.x > 0) ? rect1.right : rect1.left;
        let yFrom = p1.y + dp.y * (xFrom - p1.x) / dp.x;
        let newPFrom = new Point(xFrom, yFrom);

        let l2new = newPFrom.add(p1, -1.0).l2norm();
        let l2 = pFrom.add(p1, -1.0).l2norm();
        if (l2new < l2 || l2 === 0) {
            pFrom = newPFrom;
        }

        let xTo = (dp.x > 0) ? rect2.left : rect2.right;
        let yTo = p2.y + dp.y * (xTo - p2.x) / dp.x;
        let newPTo = new Point(xTo, yTo);

        l2new = newPTo.add(p2, -1.0).l2norm();
        l2 = pTo.add(p2, -1.0).l2norm();
        if (l2new < l2 || l2 === 0) {
            pTo = newPTo;
        }
    }

    return new Line(pFrom, pTo);
}

