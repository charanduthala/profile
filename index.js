const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container')
const downloadCv = document.getElementById('downloadCV')
const linkedIn = document.getElementById('linkedIn');
const email = document.getElementById('email')
const copyright = document.getElementById('copyright')



menu.addEventListener('click', function () {
    // menuContainer.classList.toggle('')
    openMenu()
})



// const menu = document.getElementById("menu-container");
const backdrop = document.getElementById("menu-backdrop");

function openMenu() {
    menuContainer.classList.toggle("active");
    backdrop.classList.toggle("active");
    menu.querySelector('.menu').classList.toggle('open')
}

function closeMenu() {
    menuContainer.classList.remove("active");
    backdrop.classList.remove("active");
    menu.querySelector('.menu').classList.remove('open')
}

function downloadResume() {
    window.open('./public/D CHARAN TEJA REDDY.pdf')
}

function openLinkedin() {
    window.open('https://www.linkedin.com/in/charan-teja-reddy-duthala/')
}

function sendEmail() {
    window.location.href = "mailto:duthalacharantejareddy@gmail.com";
}

backdrop.addEventListener("click", closeMenu);

downloadCv.addEventListener('click', downloadResume)

linkedIn.addEventListener('click', openLinkedin);
email.addEventListener('click', sendEmail)

const date = new Date()
const year = date.getFullYear();

copyright.textContent = "© " + year + " Charan Teja Reddy Duthala"