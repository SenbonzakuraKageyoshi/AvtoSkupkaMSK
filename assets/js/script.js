window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu'),
    html = document.querySelector('html');
    menu = document.querySelector('.header-nav');

    const openMenu = () => {
        menu.classList.toggle('active');
        
        html.classList.toggle('locked');
    };

    menuBtn.addEventListener('click', openMenu);
});