// below is for the up button

const element = document.createElement('div');
element.classList.add('up-container');

// Button for going up the page
const upBtn = document.createElement('a');
upBtn.classList.add('up-btn');

// Set the href attribute to an empty string to make it a valid anchor link
upBtn.href = '#';

upBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    // Smooth scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
        upBtn.href = '#';
    }
});

if (window.innerWidth <= 600) {
    upBtn.href = '#';
}

// Image inside the button.
const icon = new Image();
icon.src = './images/arrowUp.svg';

upBtn.appendChild(icon);
element.appendChild(upBtn);

document.body.appendChild(element);



// this is for the top nav
window.addEventListener('scroll', () => {
    var header = document.querySelector('header');

    // var logo = document.querySelector('.castro-mainLogo');
    // logo.src = 'images/castroLogoWhite.png';
    header.classList.toggle('sticky', window.scrollY > 0);
});



// this is for the animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// code for the change of backgrounds
document.addEventListener("DOMContentLoaded", function() {
    const backgrounds = ['url(images/banner1.jpeg)', 'url(images/banner2.png)', 'url(images/banner3.jpeg)', 'url(images/banner4.jpeg)'];
    const backgroundElement = document.querySelector('.main-content');
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        backgroundElement.style.backgroundImage = backgrounds[currentIndex];
        setTimeout(() => {
            backgroundElement.classList.add('blur');
        }, 500); // Adjust this delay to control when the blur effect starts
        setTimeout(() => {
            backgroundElement.classList.remove('blur');
        }, 1500); // Adjust this delay to control when the blur effect ends
    }

    // Initial call to start the animation
    changeBackground();

    // Call the function periodically to change the background
    setInterval(changeBackground, 5000); // Adjust this interval to control the duration between background changes
});
