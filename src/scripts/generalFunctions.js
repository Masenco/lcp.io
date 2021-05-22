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

function closeMenu() {
    const closeToggle = document.querySelector('.toggle');
    closeToggle.classList.remove("active");

     const closeMenu = document.querySelector('.navegation')
    closeMenu.classList.remove("active");


    const closeLinksRight = document.querySelector('.links-right')
    closeLinksRight.classList.remove("active");


    const close_logo = document.querySelector('.logo');
   close_logo.classList.remove("active");
}