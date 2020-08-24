const menu = document.querySelector('.menu');

menu.style.top = document.querySelector('header').offsetHeight + 'px';

document.querySelector('.btn-menu').onclick = () => {
    let width = menu.offsetWidth == 0 ? 200 : 0;
    menu.style.width = width + 'px';
}