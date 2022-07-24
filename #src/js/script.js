"use strict"

// Прелоадер

// window.onload = function () {
//     document.body.classList.add('loaded-hiding');
//     document.body.style.overflow = 'hidden';
//     window.setTimeout(function () {
//         document.body.classList.add('loaded');
//         document.body.classList.remove('loaded-hiding');
//         document.body.style.overflow = 'auto';
//     }, 500);
// }

window.addEventListener('DOMContentLoaded', function () {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        }
    };

    // * Меню бургер

    const headerMenuIcon = document.querySelector(".header__menu-icon");
    const headerMenuBody = document.querySelector(".header__menu-body");
    if (headerMenuIcon) {
        headerMenuIcon.addEventListener("click", function (e) {
            document.body.classList.toggle("_lock");
            headerMenuIcon.classList.toggle("_active");
            headerMenuBody.classList.toggle("_active");
        });
    }

    const asideMenuIcon = document.querySelector(".aside__menu-icon");
    const asideMenuBody = document.querySelector(".aside__menu-body");
    if (asideMenuIcon) {
        asideMenuIcon.addEventListener("click", function (e) {
            document.body.classList.toggle("_lock");
            asideMenuIcon.classList.toggle("_active");
            asideMenuBody.classList.toggle("_active");
        });
    }

    const newsMenuIcon = document.querySelector(".news-submenu__icon");
    const newsMenuBody = document.querySelector(".news-submenu__body");
    if (newsMenuIcon) {
        newsMenuIcon.addEventListener("click", function (e) {
            document.body.classList.toggle("_lock");
            newsMenuIcon.classList.toggle("_active");
            newsMenuBody.classList.toggle("_active");
        });
    }

    // * Прокрутка при клике

    // const menuLinks = document.querySelectorAll(".header__menu-link[data-goto]");
    // if (menuLinks.length > 0) {
    //     menuLinks.forEach((menuLink) => {
    //         menuLink.addEventListener("click", onMenuLinkClick);
    //     });

    //     function onMenuLinkClick(e) {
    //         e.preventDefault();
    //         const menuLink = e.target;
    //         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

    //             const gotoBlock = document.querySelector(menuLink.dataset.goto);
    //             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

    //             if (headerMenuIcon.classList.contains("_active")) {
    //                 document.body.classList.remove("_lock");
    //                 headerMenuIcon.classList.remove("_active");
    //                 headerMenuBody.classList.remove("_active");
    //             }

    //             window.scrollTo({
    //                 top: gotoBlockValue,
    //                 behavior: "smooth"
    //             });
    //         }
    //     }
    // }
})