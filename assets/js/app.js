const clickableButtons = document.querySelectorAll('.dialpad-button.clickable');
const dialScreen = document.querySelector('#dialscreen-input');

// Operations
const addValue = 'add';
const deleteValue = 'delete';

// Array of numbers
let numberArray = [];
let numberString = '';

clickableButtons.forEach(button => {
    let buttonValue = button.value;
    // Set values as the value for current button
    button.innerHTML = buttonValue;
})

document.addEventListener('keyup', (e) => {
    clickableButtons.forEach(button => {
        if(button.value === e.key) {
            setNumberArray(e.key);
        }
    })

    if(e.key === 'Backspace') {
        deleteLastNumber();
    }
})

// Set an event listener for each clickableButtons
clickableButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Her I'm destructuring the value object from the event.target object.
        let { value } = event.target;
        setNumberArray(value);
    })
})

// manage the numberArray
const manageNumberArray = (type, value) => {
    let inputValue = '';
    // check by condition and manage the numberarray
    type === 'add' ? numberArray.push(value) : numberArray.pop();
    // forEach number in array, append it to the inputValue
    numberArray.forEach((number) => {
        inputValue += number;
    })
    // Once input value is filled, set it to the numberString global var
    numberString = inputValue;
    // Then set the input value to the numberString
    dialScreen.value = numberString;
}

// Set value into the input field 
const setNumberArray = (value) => {
    manageNumberArray(addValue, value);
}

const setAsFavourite = () => { }

const call = () => { }

const deleteLastNumber = () => {
    manageNumberArray(deleteValue, null)
}