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
// Get references for Focus and Blur Events
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

// Add event listener for focus
focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused!';
    console.log('Input field gained focus.');
});

// Add event listener for blur
focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input field lost focus.';
    console.log('Input field lost focus.');
});
// Get references for Event Delegation
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

// Add event listener to the container
buttonContainer.addEventListener('click', (event) => {
    // Checks if the clicked element (event.target) is a button
    // The 'matches' method checks if the element would be selected by the specified CSS selector.
    if (event.target.matches('.delegated-button')) {
        const buttonText = event.target.textContent;
        delegationMessage.textContent = `${buttonText}`;
        console.log(`Delegated click: ${buttonText}`);
    }
});