const smp = document.querySelector('#smp');
const atha = document.querySelector('#atha');
const yourName = localStorage.getItem('name');
const named = yourName.split(' ');const anchor = document.querySelector('#switch');

const images = document.querySelectorAll('.slider');

smp.textContent = named[0];
atha.textContent = named[1];

anchor.addEventListener('click', function () {
    localStorage.removeItem('name');
});



let i = 1;
let moused = false;
images[0].style.visibility = 'visible';

for (img of images) {
    img.addEventListener('mouseover', () => {
        moused = true;
    });

    img.addEventListener('mouseleave', () => {
        moused = false;
    })
}

setInterval(() => {
    if (moused !== true) {
        for (img of images) {
            img.style.visibility = 'hidden';
        }

        images[i].style.visibility = 'visible';
        i++;
        if (i === images.length) { i = 0 }
    }
}, 4000);
