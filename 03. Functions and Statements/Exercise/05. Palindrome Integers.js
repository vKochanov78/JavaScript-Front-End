function palindromeChecher(numberArray) {
    function mainCheck(number) {
        number = number.toString();
        return number === number.split('').reverse().join('');
    }
    for (number of numberArray) {
        console.log(mainCheck(number));
    }
}

palindromeChecher([123, 323, 421, 121])
palindromeChecher([32, 2, 232, 1010])