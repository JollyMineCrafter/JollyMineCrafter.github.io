const user = document.querySelector('#user');
const max = user.maxLength;
const back = document.querySelector('#return');
const proceed = document.querySelector('#proceed');

const allow = /^[a-z\d_\s]+$/i;

if (user.value.length === max) { user.style.color = 'yellow' } else { user.style.color = 'white' }

user.addEventListener('input', function (e) {
    v = user.value.toLowerCase()
    if (v === 'gaster') {
        user.value = ''
        user.style.color = 'unset';
    } else if (v.length === max) {
        user.style.color = 'yellow';
    } else {
        user.style.color = 'white';
    }
});

back.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("GOOD NIGHT.");
});
