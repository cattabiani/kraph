document.addEventListener("mousedown", async function (event) {
    await dispatchNewNodeEvent(5, 7);
});

document.addEventListener("newNodeEvent", async function (event) {
    console.log("Received Custom Event!");
    console.log("Event Details:", event.detail);
    console.log("Event Details:" + event.detail.getX());
    console.log("Event Details:" + event.detail.getC());
});