var menu_toggle = document.querySelector('.toggle-menu');
var main_nav = document.querySelector('.main-navigation');
var main_menu = document.querySelector('.menu-bg');
var menu_links = document.querySelectorAll('.menu-link');
const icons = document.querySelectorAll('.hamburger');

function open_menu() {
  for (let i = 0; i < menu_links.length; i++) {
    icons.forEach(function(icon) {
      icon.classList.add('open');
    });

    main_nav.classList.add('open');
    main_menu.classList.add('open');
    menu_links[i].removeAttribute('tabindex');
    menu_toggle.setAttribute("aria-expanded", "true")
    main_menu.setAttribute("aria-hidden", "false")
  }
}

function close_menu() {
  for (let i = 0; i < menu_links.length; i++) {
    icons.forEach(function(icon) {
      icon.classList.remove('open');
    });

    main_nav.classList.remove('open');
    main_menu.classList.remove('open');
    menu_links[i].setAttribute('tabindex', '-1');
    menu_toggle.setAttribute("aria-expanded", "false")
    main_menu.setAttribute("aria-hidden", "true")
  }
}

function uniKeyCode(event) {
  var key = event.keyCode;

  if (key == 27) {
    close_menu();
  }
}

menu_toggle.addEventListener('click', (event) => {
  if (main_menu.classList.contains('open')) {
    close_menu();
  } else {
    open_menu();
  }
});

document.addEventListener("keydown", uniKeyCode);
