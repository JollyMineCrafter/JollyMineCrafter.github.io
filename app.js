const user = document.querySelector('#user');
const max = user.maxLength;
const back = document.querySelector('#return');
const proceed = document.querySelector('#proceed');

if (user.value.length === max) { user.style.color = 'yellow' } else { user.style.color = 'white' }

user.addEventListener('input', function (e) {
    v = user.value.toLowerCase();
    if (v.trim() === 'gaster') {
        user.value = '';
        user.style.color = 'unset';
    } else if (v.length === max) {
        user.style.color = 'yellow';
    } else {
        user.style.color = 'white';
    }
});

back.addEventListener('click', function (e) {
    console.log("GOOD NIGHT.");
    history.go(-1);
});

proceed.addEventListener('click', function (e) {
    e.preventDefault();
    const v = user.value;
    document.cookie = 'name=v; SameSite=None; Secure'
});
