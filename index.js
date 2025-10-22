const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container')



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

backdrop.addEventListener("click", closeMenu);
