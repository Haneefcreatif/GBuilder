const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); //javascript css to display nav menu
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

//Active and remove menu mobile
const navLink =document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //when I click on each nav__link, remove the show class selector
}
navLink.forEach((n) => n.addEventListener('click', linkAction));