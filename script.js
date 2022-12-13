const now = document.getElementById('now');
const previous = document.getElementById('previous');

let operatorInput = false; //prevents double operation input
let previousNum;
let nowNum;

function input(event) {
    validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (event.target.id in validNumbers || event.target.id === '.') {
        now.textContent += event.target.id;
        operatorInput = false;
    }
    if (event.target.id === '+' && operatorInput == false || event.target.id === '-' && operatorInput == false ||
        event.target.id === '*' && operatorInput == false || event.target.id === '/' && operatorInput == false) {
        previous.textContent += `${now.textContent} ${event.target.id} `
        previousNum = previous.textContent;
        now.textContent = "";
        nowNum = now.textContent;
        operatorInput = true;
    }
    if (event.target.id === 'clear') {
        now.textContent = "";
        previous.textContent = "";
    }
    if (event.target.id === 'delete') {
        now.textContent = now.textContent.slice(0, -1);
    }
    if (event.target.id === '=') {
        previous.textContent += now.textContent;
        now.textContent = eval(previous.textContent);
    }
}   
