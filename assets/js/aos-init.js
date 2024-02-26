var animation_toggle = document.querySelector('.toggle-animation');
var animation_toggle_text = document.querySelector('.toggle-animation-text');
var animation_toggle_icon = document.querySelector('.toggle-animation-icon');
const media_query = window.matchMedia("(prefers-reduced-motion: reduce)");

function animations_on() {
  AOS.init({
    duration: 1000,
    once: true,
    initClassName: 'aos-init',
    anchorPlacement: 'center-center'
  });

  animation_toggle.classList.remove('animations-off');
  animation_toggle.classList.add('animations-on');
  animation_toggle_text.innerText = "Animation On"
  animation_toggle_icon.innerText = "motion_photos_on";

  try {
    localStorage.setItem('animation_preference', 'on');
  } catch (e) {
    consolelog('Could not set local storage');
  }
}

function animations_off() {
  AOS.init({
    disable: true
  });

  animation_toggle.classList.remove('animations-on');
  animation_toggle.classList.add('animations-off');
  animation_toggle_text.innerText = "Animation Off"
  animation_toggle_icon.innerText = "motion_photos_off";

  try {
    localStorage.setItem('animation_preference', 'off');
  } catch (e) {
    consolelog('Could not set local storage');
  }
}

/* Use any existing preference -----------------------------------------------*/
if (localStorage.getItem('animation_preference')) {
  if (localStorage.getItem('animation_preference') == 'on') {
    animations_on();
  }
  else {
    animations_off();
  }
} /* Otherwise use system setting --------------------------------------------*/
else if (!media_query || media_query.matches) {
  animations_off();
} /* Otherwise default to on -------------------------------------------------*/
else {
  animations_on();
}


/* Toggle setting ------------------------------------------------------------*/
animation_toggle.addEventListener('click', (event) => {
  if (animation_toggle.classList.contains('animations-off')) {
    animations_on();
  } else {
    animations_off()
  }
});
