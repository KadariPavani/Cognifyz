document.addEventListener('DOMContentLoaded', function() {
    // Button color change
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
        colorButton.classList.toggle('clicked');
    });

    // Alert box with greeting message
    function showGreeting() {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = 'Good Morning!';
        } else if (currentHour < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        alert(greeting);
    }

    showGreeting();

    // Full Calculator
    const display = document.getElementById('display');
    let currentInput = '';
    let currentOperator = null;
    let firstOperand = null;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                currentOperator = null;
                firstOperand = null;
                display.value = '';
            } else if (value === '=') {
                if (currentOperator && firstOperand !== null && currentInput !== '') {
                    const secondOperand = parseFloat(currentInput);
                    let result;

                    switch (currentOperator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }

                    display.value = result;
                    currentInput = '';
                    firstOperand = null;
                    currentOperator = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    currentOperator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
