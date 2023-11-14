function solve(number) {
    let oddSum = 0;
    let evenSum = 0;
    function add(number) {
        if (number % 2 === 0){
            evenSum +=number
        } else {
            oddSum += number
        }
    };
    while (number) {
        currentNumber = number % 10
        add(currentNumber)
        number = Math.floor(number/10)
    };
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435)
solve(3495892137259234)