window.onload = function () {
    document.body.classList.add("_hide");
    document.body.style.overflow = "hidden";
    this.setTimeout(() => {
        document.body.classList.add("_loaded");
        document.body.classList.remove("_hide");
        document.body.style.overflow = "auto";
    }, 500);
}