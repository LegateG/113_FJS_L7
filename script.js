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
// Get references for Form Events
const myForm = document.getElementById('myForm');
const formSubmitMessage = document.getElementById('formSubmitMessage');
const nameInput = document.getElementById('nameInput'); // Also get a reference to the input field

// Add event listener for form submission
myForm.addEventListener('submit', (event) => {
    // Prevents the page from refreshing - the default form submission behavior
    event.preventDefault();

    const nameValue = nameInput.value; // Gets the value from the name input
    formSubmitMessage.textContent = `Form submitted! Welcome, ${nameValue || 'Guest'}!`;
    console.log('Form submitted (page not refreshed).');
    console.log('Name input value:', nameValue);
});