const display = document.querySelector(".display-box");
const key = document.querySelectorAll(".key");
const operators = ["+", "-", "×", "÷", "%"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let filter = (x) => {
    let current = display.innerText;
    let lastChar = current[current.length - 1];

    // Remove the '0' from start
    if (current == "0" && x != ".") {
        display.innerText = x;
        return false;
    }

    // Operators Condition
    if (operators.includes(x) && operators.includes(lastChar)) {
        return false;
    }

    // Not to loop '.'
    if (lastChar == "." && !numbers.includes(x)) {
        return false;
    }

    switch (current.length) {
        case 8:
            display.style.fontSize = "45px";
            return true;
        case 11:
            display.style.fontSize = "35px";
            return true;
        case 14:
            return false;
    }

    return true;
};

let showInDisplay = (x) => {
    if (filter(x)) {
        display.innerText += x;
    }
};

let calculate = () => {
    if (display.innerText.includes("×")) {
        let newText = display.innerText.replace(/×/gi, "*");
        display.innerText = eval(newText);
    } else if (display.innerText.includes("÷")) {
        let newText = display.innerText.replace(/÷/gi, "/");
        display.innerText = eval(newText);
    } else {
        if (!operators.includes(display.innerText.slice(-1))) {
            display.innerText = eval(display.innerText);
        }
    }
};

let allDelete = () => {
    display.innerText = 0;
    display.style.fontSize = "60px";
};

let aWordDelete = () => {
    if (display.innerText.length == 1) {
        display.innerText = 0;
    } else {
        let newText = display.innerText.slice(0, display.innerText.length - 1);
        display.innerText = newText;
    }

    switch (display.innerText.length) {
        case 8:
            display.style.fontSize = "60px";
            break;
        case 11:
            display.style.fontSize = "45px";
            break;
        case 14:
            display.style.fontSize = "35px";
    }
};
