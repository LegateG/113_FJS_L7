// Get references to the button and message span
const mouseEventButton = document.getElementById('mouseEventButton');
const mouseEventMessage = document.getElementById('mouseEventMessage');

// Add event listener for mouseover
mouseEventButton.addEventListener('mouseover', () => {
    mouseEventMessage.textContent = 'You are hovering over the button!';
    console.log('Mouse entered button area.');
});

// Add event listener for mouseout
mouseEventButton.addEventListener('mouseout', () => {
    mouseEventMessage.textContent = 'Not hovered';
    console.log('Mouse left button area.');
});