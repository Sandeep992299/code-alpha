document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    function updateDisplay(value) {
        display.textContent = value;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === '=') {
                if (currentInput && previousInput && operator) {
                    const result = evaluate(previousInput, currentInput, operator);
                    alert(`The result is: ${result}`);
                    previousInput = result;
                    currentInput = '';
                    operator = null;
                    updateDisplay('0');
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        const result = evaluate(previousInput, currentInput, operator);
                        previousInput = result;
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                }
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        operator = null;
        updateDisplay('0');
    });

    function evaluate(a, b, operator) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
});
