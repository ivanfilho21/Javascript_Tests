const menu = document.querySelector('.menu');
menu.style.top = document.querySelector('header').offsetHeight + 'px';

function toggleMenu() {
    menu.style.width = menu.style.width != '200px' ? '200px' : '0';
}

document.querySelector('.btn-menu').onclick = toggleMenu;