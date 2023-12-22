function updateNode(id, label, x, y) {
    console.log(id);
    console.log(label);
    console.log(x);
    console.log(y);
}

document.addEventListener('DOMContentLoaded', async function() {
    // This code will be executed when the document is fully loaded
    
    // Call the async function after the document is loaded
    callbackManager.promise.then(function () {
        callbackManager.registerUpdateNode(updateNode);
      });

    // You can perform other tasks here as well
    console.log('Document is fully loaded!');
});

document.addEventListener("mousedown", async function (event) {
    newNode.promise.then(function () {
        newNode(event.clientX, event.clientY);
    });
});



// document.addEventListener("updateNodeEvent", async function (event) {
//     console.log("Received Custom Event!");
//     console.log("Event Details:", event.detail);
//     console.log("Event Details:" + event.detail.getX());
//     console.log("Event Details:" + event.detail.getId());
//     await printGraph();

//     event.detail.delete();
// });

// document.addEventListener("updateNodeEvent", async function (event) {
//     // Trigger the custom event when a click occurs
//     document.dispatchEvent(new CustomEvent("updateNodeEvent", { detail: clickEvent }));
    
//     // After triggering the event, wait for all promises to resolve
//     await Promise.all(updateNodeCallbacks);

//     // At this point, all listeners have completed
//     updateNodeCallback();
// });