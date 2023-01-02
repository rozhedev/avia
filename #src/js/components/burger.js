// * For detect device type
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.iOS() ||
            isMobile.Windows()
        );
    }
};

const headerMenuIcon = document.querySelector(".header__menu-icon");
const headerMenuBody = document.querySelector(".header__menu-body");
if (headerMenuIcon) {
    headerMenuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        this.classList.toggle("_active");
        headerMenuBody.classList.toggle("_active");
    });
}

const asideMenuIcon = document.querySelector(".aside__menu-icon");
const asideMenuBody = document.querySelector(".aside__menu-body");
if (asideMenuIcon) {
    asideMenuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        this.classList.toggle("_active");
        asideMenuBody.classList.toggle("_active");
    });
}

const newsMenuIcon = document.querySelector(".news-submenu__icon");
const newsMenuBody = document.querySelector(".news-submenu__body");
if (newsMenuIcon) {
    newsMenuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        this.classList.toggle("_active");
        newsMenuBody.classList.toggle("_active");
    });
}