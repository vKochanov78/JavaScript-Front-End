function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);

    let diff = num1 - num2;

    result = document.querySelector('#result');
    result.textContent = diff;
}