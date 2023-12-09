function calc() {
    const firstNum = Number(document.querySelector('#num1').value);
    const secondNum = Number(document.querySelector('#num2').value);
    const result = firstNum + secondNum;

    document.querySelector('#sum').value = result
}
