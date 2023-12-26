function toggle() {
    const text = document.querySelector('#extra');
    const button = document.querySelector('.button');

    if (text.style.display === 'none') {
        text.style.display = 'block';
        button.textContent = 'Less';
    } else {
        text.style.display = 'none';
        button.textContent = 'More';
    }
}