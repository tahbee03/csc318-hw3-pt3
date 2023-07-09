function factorial(num) {
    let result = 1;

    for(let i = 1; i <= num; i++) result *= i;

    return result;
}

const buttons = document.getElementsByClassName("btn");

let queue = [];

const unaryOps = {
    factorial, 
    sine: Math.sin, 
    ln: Math.log, 
    cosine: Math.cos, 
    log: Math.log10, 
    tangent: Math.tan, 
    sqrt: Math.sqrt, 
    epower: (num) => Math.pow(Math.E, num)
};

const binaryOps = {
    percent: (num1, num2) => (num1 / 100) * num2, // "num1 percent of num2"
    divide: (num1, num2) => num1 / num2, 
    multiply: (num1, num2) => num1 * num2,
    subtract: (num1, num2) => num1 - num2,
    power: Math.pow, 
    add: (num1, num2) => num1 + num2
};

function calculate(q) {
    console.log(q);
    if(q.length == 0) return 0; // Nothing to calculate
    else if(q.length == 1) return Number(q[0]); // Return number
    else if(Object.keys(unaryOps).includes(q[0])) return calculate([unaryOps[q[0]](Number(q[1])), ...q.slice(2)]); // Perform unary operation and "shrink" list
    else if(Object.keys(binaryOps).includes(q[1])) return calculate([binaryOps[q[1]](Number(q[0]), Number(q[2])), ...q.slice(3)]); // Perform binary operation and "shrink" list
}

function process(value) {
    if(value == "AC") {
        queue = [];
        document.getElementById("calc").innerHTML = "0";
        return;
    }
    
    if(value == "equal") {
        // console.log(calculate(queue));
        document.getElementById("calc").innerHTML = (typeof calculate(queue) == "number" && isFinite(calculate(queue))) ? calculate(queue) : "ERROR!";
        // queue = [];
        return;
    }

    if(value == "disabled") {
        queue = [];
        document.getElementById("calc").innerHTML = value;
        return;
    }

    if(queue.length == 0) {
        queue.push(value);

        document.getElementById("calc").innerHTML = queue[0];
    } else {
        if(!Number.isNaN(Number(queue[queue.length - 1])) && (!Number.isNaN(Number(value)) || value == ".")) queue[queue.length - 1] = queue[queue.length - 1] + value;
        else queue.push(value);

        document.getElementById("calc").innerHTML = queue.join(" ");
    }
}