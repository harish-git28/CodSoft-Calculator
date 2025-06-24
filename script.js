const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equalBtn.addEventListener('click', () => {
  try {
    // Evaluate the expression
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (e) {
    display.value = 'Error';
    currentInput = '';
  }
});