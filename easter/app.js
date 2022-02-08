const display = document.querySelector('#name');
const yourName = localStorage.getItem('name');
const anchor = document.querySelector('#switch');

display.textContent = yourName;

anchor.addEventListener('click', function () {
    localStorage.removeItem('name');
});
