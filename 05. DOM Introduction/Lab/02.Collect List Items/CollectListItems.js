function extractText() {
    const itemList = Array.from(document.querySelectorAll('li'));
    const result = itemList.map((item) => item.textContent).join('\n');

    document.querySelector('#result').value = result
}