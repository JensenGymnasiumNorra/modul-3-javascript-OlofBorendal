function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}

function calculateSubtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function calculateMultiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function calculateDivide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 / num2;

    if (num2 === 0){
        document.getElementById('result').innerHTML = 'Error; Cannot divide by zero'
    } else{
        let result = num1/num2
        document.getElementById('result').innerHTML = 'Result: ' + result;
    }



    
}