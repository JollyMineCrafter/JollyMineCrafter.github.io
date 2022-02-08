if (localStorage.getItem('name') !== null) {
    document.location.href = './easter/easter.html';
};

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
    } else if (v.trim().length === max) {
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
    const v = user.value;
    localStorage.setItem('name', v);
    // document.cookie = 'name=v; SameSite=None; Secure'
});
