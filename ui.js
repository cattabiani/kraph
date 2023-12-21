document.addEventListener("mousedown", async function (event) {
    await newNode(event.clientX, event.clientY);
});

document.addEventListener("updateNodeEvent", async function (event) {
    console.log("Received Custom Event!");
    console.log("Event Details:", event.detail);
    console.log("Event Details:" + event.detail.getX());
    console.log("Event Details:" + event.detail.getId());
});