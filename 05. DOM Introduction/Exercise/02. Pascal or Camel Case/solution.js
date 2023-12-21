function solve() {
  let inputData = Array.from(document.querySelector('#text').value.split(' '));
  let currentCase = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");

  if (currentCase === 'Camel Case' || currentCase === 'Pascal Case') {
    let updatedText = inputData.reduce((acc, word, index) => {
      let element = word.toLowerCase();
      let formatedWord = index > 0 ? element.charAt(0).toUpperCase() + element.slice(1) : element;
      return acc + formatedWord
    }, '');

    result.textContent = currentCase === "Camel Case" ? updatedText : updatedText.charAt(0).toUpperCase() + updatedText.slice(1);  } else {
    result.textContent = 'Error!';
  }
}
