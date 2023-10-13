let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

