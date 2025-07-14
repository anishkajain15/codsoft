// Select the display input
let display = document.getElementById('display');

// Add value to the display
function appendValue(value) {
  display.value += value;
}

// Clear all input
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    // Use eval carefully for simple math only
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}