"use strict";
document.addEventListener('DOMContentLoaded', ()=> {
    let burgerMenuButton = document.querySelector('.header_burger-menu'),
        menu = document.querySelector('.header-menu-hidden'),
        clickArea = document.querySelector('.click-area');

    burgerMenuButton.addEventListener('click', (event)=> {
        burgerMenuButton.classList.toggle('open-nav-icon');
        menu.classList.toggle('menu_opened');
    });

    clickArea.addEventListener('click', (event) => {
        if (event.target === clickArea) {
            burgerMenuButton.classList.toggle('open-nav-icon');
            menu.classList.toggle('menu_opened');
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('menu_opened')) {
            menu.classList.toggle('menu_opened');
            burgerMenuButton.classList.toggle('open-nav-icon');
        }
    });
});

