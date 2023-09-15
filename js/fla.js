// Display Header

const myHeader = document.getElementById("fla-header");
const h1 = document.querySelector("h1");
const herobutton = document.getElementById("fla-hero-button");
const column = document.getElementById("column");
const heroText = document.getElementById("hero");
const wolfDiv = document.getElementById("wolf");
const heroBg = document.getElementById("fla-hero-bg");
var wolfDivStyle = wolfDiv.currentStyle || window.getComputedStyle(wolfDiv);
var headerAppear = wolf.offsetHeight + parseInt(wolfDivStyle.marginTop) - myHeader.offsetHeight;

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= headerAppear || document.documentElement.scrollTop >= headerAppear) {
    myHeader.classList.add("fla-header-show");
    heroBg.style.opacity = '0';
    heroText.classList.add("fla-hero-hide");
  } else {
    myHeader.classList.remove("fla-header-show");
    heroBg.style.opacity = '1';
    heroText.classList.remove("fla-hero-hide");
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

// Hero anim

  window.onload = function () {
        lax.init()

        lax.addDriver('scrollY', function () {
          return window.scrollY
        })
        lax.addElements("#fla-down-button", {
          scrollY: {
            opacity: [
              [0, 200],
              [1, 0],
              {
                easing: 'easeInQuad',
              }
            ],
          }
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