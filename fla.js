// vh

/*let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);*/

// Open & Close Navigation

var OPEN = false;
const html = document.querySelector('html');
const body = document.querySelector('body');
const menu = document.getElementById("flaMenu");
const header = document.querySelector("nav");
const menubutton = document.getElementsByClassName("fla-round-button-bg")[0];
  function toggleMenu(){
    if(OPEN){
      OPEN = false;
      body.classList.remove('noscroll-2');
      menu.classList.remove("fla-menu-open");
      menu.classList.add("fla-menu-close");
      header.classList.remove("fla-header-fullscreen");
      menubutton.classList.remove("fla-round-button-bg-active");
    } else {
      OPEN = true;
      body.classList.add('noscroll-2');
      menu.classList.add("fla-menu-open");
      menu.classList.remove("fla-menu-close");
      header.classList.add("fla-header-fullscreen");
      menubutton.classList.add("fla-round-button-bg-active");
      window.history.pushState({ isMenu: true }, 'Menü');
    }
  };

  // Display Header

  var myHeader = document.getElementById("fla-header");
  const h1 = document.querySelector("h1");
  const herobutton = document.getElementById("fla-hero-button")
  const column = document.getElementById("column");
  const heroText = document.getElementById("hero");
  var headerAppear = hero.offsetHeight + wolf.offsetHeight - header.offsetHeight;

  window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= headerAppear || document.documentElement.scrollTop >= headerAppear) {
      myHeader.classList.add("fla-header-show");
      heroText.classList.add("fla-hero-hide");
      h1.classList.remove("fla-will-change");
      herobutton.classList.remove("fla-will-change");
      column.classList.remove("fla-will-change");
    } else {
      myHeader.classList.remove("fla-header-show");
      heroText.classList.remove("fla-hero-hide");
      h1.classList.add("fla-will-change");
      herobutton.classList.add("fla-will-change");
      column.classList.add("fla-will-change");
    }
  };

// Form

const modalMagyar = document.getElementById('magyar');
const modalTortenelem = document.getElementById('tortenelem');
const modalTrening = document.getElementById('trening');
const modalForm = document.getElementById('apply');

function showMagyar() {
  window.history.pushState({ isModal: true }, 'Magyar nyelv és irodalom');
  body.classList.add('noscroll');
  modalMagyar.scrollTop = 0;
  modalMagyar.classList.add('show');
};

function hideMagyar() {
  modalMagyar.classList.remove('show');
  body.classList.remove('noscroll');
};

function closeMagyar() {
  window.history.back();
  body.classList.remove('noscroll');
};

function showTortenelem() {
  window.history.pushState({ isModal: true }, 'Történelem');
  body.classList.add('noscroll');
  modalTortenelem.scrollTop = 0;
  modalTortenelem.classList.add('show');
};

function hideTortenelem() {
  modalTortenelem.classList.remove('show');
  body.classList.remove('noscroll');
};

function closeTortenelem() {
  window.history.back();
  body.classList.remove('noscroll');
};

function showTrening() {
  window.history.pushState({ isModal: true }, 'Tréning és tanácsadás');
  body.classList.add('noscroll');
  modalTrening.scrollTop = 0;
  modalTrening.classList.add('show');
};

function hideTrening() {
  modalTrening.classList.remove('show');
  body.classList.remove('noscroll');
};

function closeTrening() {
  window.history.back();
  body.classList.remove('noscroll');
};

function showForm() {
  window.history.pushState({ isModal: true }, 'Jelentkezés');
  body.classList.add('noscroll');
  modalForm.scrollTop = 0;
  modalForm.classList.add('show');
};

function hideForm() {
  modalForm.classList.remove('show');
  body.classList.remove('noscroll');
};

function closeForm() {
  window.history.back();
};

window.onpopstate = function() {
  if(OPEN) {
    toggleMenu();
    isMenu = false;
  }
  else {
    hideMagyar();
    hideTortenelem();
    hideTrening();
    hideForm();
    isModal = false;
  }
};

// Carousel

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
  delay: 7000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
  },
});

window.onload = function () {
      lax.init()

      lax.addDriver('scrollY', function () {
        return window.scrollY
      })
      lax.addElements("#segitunk", {
        scrollY: {
          opacity: [
            [200, 600],
            [1, 0],
            {
              easing: 'easeInQuad',
            }
          ],
          scale: [
            [200, 600],
            [1, 0.75],
            {
              easing: 'easeInQuad',
            }
          ],
          translateY: [
            [200, 600],
            [0, "2 * elHeight"],
            {
              easing: 'easeInQuad',
            }
          ],
        }
      })
      lax.addElements("#magasabbra", {
        scrollY: {
          opacity: [
            [150, 550],
            [1, 0],
            {
              easing: 'easeInQuad',
            }
          ],
          scale: [
            [150, 550],
            [1, 0.5],
            {
              easing: 'easeInQuad',
            }
          ],
          translateY: [
            [150, 550],
            [0, "elHeight"],
            {
              easing: 'easeInQuad',
            }
          ],
        }
      })
      lax.addElements("#emelkedni", {
        scrollY: {
          opacity: [
            [100, 500],
            [1, 0],
            {
              easing: 'easeInQuad',
            }
          ],
          scale: [
            [100, 500],
            [1, 0.25],
            {
              easing: 'easeInQuad',
            }
          ],
        }
      })
      lax.addElements(".fla-hero-button", {
        scrollY: {
          opacity: [
            [0, 400],
            [1, 0],
            {
              easing: 'easeInQuad',
            }
          ],
          scale: [
            [0, 400],
            [1, 0],
            {
              easing: 'easeInQuad',
            }
          ],
          translateY: [
            [0, 500],
            [0, "-0.25 * elHeight"],
            {
              easing: 'easeInQuad',
            }
          ],
        }
      })
      lax.addElements("#column", {
        scrollY: {
          opacity: [
            ["elCenterY", "elOutY"],
            [ 1, 0],
            {
              easing: 'easeOutQuart',
            }
          ],
          scale: [
            ["elCenterY", "elOutY"],
            [ 1, 0.75],
            {
              easing: 'easeOutQuad',
            }
          ],
        }
      })
    };
