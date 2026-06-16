const userList = document.getElementById("user-id-click");

userList.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('li');

    if (clickedItem) {
        const id = clickedItem.getAttribute('data-id');
        console.log(id);
    }
});

// Event Deligation: Define a single event-handler to the parent element rather than providing to each child element.
// The event will bubble up and eventually reaches the parent element, where parent can track the target.element 
