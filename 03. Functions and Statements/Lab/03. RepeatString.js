function repeatString (text, timesToRepeat) {
    let newText = '';
    for (let i=0; i<timesToRepeat; i++) {
        newText = newText.concat(text);
    }
    return newText
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
