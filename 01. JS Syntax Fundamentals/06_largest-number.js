function largest_number (num1, num2, num3) {
    const largestNum = Math.max(num1, num2, num3);

    console.log(`The largest number is ${largestNum}.`)
}

largest_number(54,6,3) // Expected output: The largest number is: 54
largest_number(5,6,3) // Expected output: The largest number is: 6
largest_number(5,6,36) // Expected output: The largest number is: 36