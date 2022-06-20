let num1 = 25;
console.log(`O primeiro número inteiro positivo escolhido: ${num1}`);
let num2 = 9;
console.log(`O segundo número inteiro positivo escolhido: ${num2}`);
let sum = add(num1, num2);
console.log(`Soma: ${sum}`);
let diffResult = 0;
let subtraction = diff(num1, num2);
console.log(`Diferença: ${subtraction}`);
let multResult = 0;
let multiply = mult(num1, num2);
console.log(`Multiplicação: ${multiply}`);
let powResult = 1;
let power = pow(num1, num2);
console.log(`Potência: ${power}`);
let divResult = 0;
let division = div(num1, num2);
console.log(`Divisão: ${division}`);

function add(a, b) {
    try {
        if (a < 0 || b < 0) {
            const sumError1 = new Error(`Impossible to sum ${a} + ${b}`);
            sumError1.name = "[sum]";
            throw sumError1;
        };
        if (parseFloat(a) != parseInt(a) || parseFloat(b) != parseInt(b) || parseInt(a) !== a || parseInt(b) !== b) {
            const sumError2 = new Error(`Impossible to sum ${a} + ${b}`);
            sumError2.name = "[sum]";
            throw sumError2;
        };
        const addResult = a + b;
        return addResult;
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    };
};

function diff(c, d) {
    try {
        if (c < d) {
            const diffError1 = new Error(`Impossible to subtract ${c} - ${d}`);
            diffError1.name = "[subtract]";
            throw diffError1;
        };
        if (c < 0 || d < 0) {
            const diffError2 = new Error(`Impossible to subtract ${c} - ${d}`);
            diffError2.name = "[subtract]";
            throw diffError2;
        };
        if (parseFloat(c) != parseInt(c) || parseFloat(d) != parseInt(d) || parseInt(c) !== c || parseInt(d) !== d) {
            const diffError3 = new Error(`Impossible to subtract ${c} - ${d}`);
            diffError3.name = "[subtract]";
            throw diffError3;
        };
        if (c == d) {
            return diffResult;
        }
        else {
            diffResult = add(diffResult, 1);
            d = add(d, 1);
            return diff(c, d);
        };
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    };
};

function mult(e, f) {
    try {
        if (e < 0 || f < 0) {
            const multError1 = new Error(`Impossible to multiply ${e} * ${f}`);
            multError1.name = "[multiply]";
            throw multError1;
        };
        if (parseFloat(e) != parseInt(e) || parseFloat(f) != parseInt(f) || parseInt(e) !== e || parseInt(f) !== f) {
            const multError2 = new Error(`Impossible to multiply ${e} * ${f}`);
            multError2.name = "[multiply]";
            throw multError2;
        };
        diffResult = 0;
        if (e == 0) {
            return multResult;
        }
        else if (e == 1) {
            multResult = add(multResult, f);
            return multResult;
        }
        else {
            multResult = add(multResult, f);
            e = diff(e, 1);
            return mult(e, f);
        };
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    };
};

function pow(g, h) {
    try {
        if (g < 0 || h < 0) {
            const powError1 = new Error(`Impossible to power ${g} ^ ${h}`);
            powError1.name = "[power]";
            throw powError1;
        };
        if (parseFloat(g) != parseInt(g) || parseFloat(h) != parseInt(h) || parseInt(g) !== g || parseInt(h) !== h) {
            const powError2 = new Error(`Impossible to power ${g} ^ ${h}`);
            powError2.name = "[power]";
            throw powError2;
        };
        diffResult = 0;
        multResult = 0;
        if (h == 0) {
            return powResult;
        }
        else if (h == 1) {
            powResult = mult(g, powResult);
            return powResult;
        }
        else {
            powResult = mult(g, powResult);
            h = diff(h, 1);
            return pow(g, h);
        };
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    };
};

function div(i, j) {
    try {
        if (j == 0) {
            const divError0 = new Error(`Division by zero`);
            divError0.name = "[divide]";
            throw divError0;
        };
        if (i < 0 || j < 0) {
            const divError1 = new Error(`Impossible to divide ${i} / ${j}`);
            divError1.name = "[divide]";
            throw divError1;
        };
        if (parseFloat(i) != parseInt(i) || parseFloat(j) != parseInt(j) || parseInt(i) !== i || parseInt(j) !== j) {
            const divError2 = new Error(`Impossible to divide ${i} / ${j}`);
            divError2.name = "[divide]";
            throw divError2;
        };
        diffResult = 0;
        multResult = 0;
        if (i < j) {
            return divResult;
        }
        else {
            divResult = add(divResult, 1);
            i = diff(i, j);
            return div(i, j);
        };
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    };
};