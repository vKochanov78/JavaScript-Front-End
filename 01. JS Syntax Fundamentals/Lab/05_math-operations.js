function math_operators (num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result)
}

math_operators(3, 4, '+')  // Expected output: 7
math_operators(3, 4, '-')  // Expected output: -1
math_operators(3, 4, '*')  // Expected output: 12
math_operators(3, 4, '/')  // Expected output: 0.75
math_operators(3, 4, '%')  // Expected output: 3
math_operators(3, 4, '**')  // Expected output: 81