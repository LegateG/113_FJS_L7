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
// Get references for Keyboard Events
const keyboardInput = document.getElementById('keyboardInput');
const keyPressMessage = document.getElementById('keyPressMessage');

// Add event listener for keydown
keyboardInput.addEventListener('keydown', (event) => {
    keyPressMessage.textContent = event.key;
    console.log(`Key pressed: ${event.key}`);
});