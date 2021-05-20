function openMenu() {
const toggle_menu = document.querySelector('.toggle')
    toggle_menu.classList.toggle("active");

    const open_menu = document.querySelector('.navegation');
    open_menu.classList.toggle("active");

    const linksBanner = document.querySelector('.links-right');
    linksBanner.classList.toggle("active");

    const deleteLogo = document.querySelector('.logo');
    deleteLogo.classList.toggle("active");
}