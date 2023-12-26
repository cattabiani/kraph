// new node
document.addEventListener("dblclick", async function (event) {
    if (isModalModeOn()) return;
    if (!isEmptySpace(event.target)) return;

    await newNode(event.clientX, event.clientY);

});