const now = document.getElementById('now');
const previous = document.getElementById('previous');
function input(event) {
    validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (event.target.id in validNumbers) {
        now.textContent += event.target.id;
    }
    if (event.target.id === '+' || event.target.id === '-' ||
        event.target.id === 'x' || event.target.id === '÷') {
        previous.textContent += `${now.textContent} ${event.target.id} `
        now.textContent = "";
    }
    if (event.target.id === 'clear') {
        now.textContent = "";
    }
    if (event.target.id === 'delete') {
        now.textContent = now.textContent.slice(0, -1);
    }
}



// math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
