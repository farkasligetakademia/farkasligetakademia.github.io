// Menu items delay

function delay (URL) {
  setTimeout( function() { window.location = URL }, 200 );
}

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
      //scrollLock.enablePageScroll();
      menu.classList.remove("fla-menu-open");
      menu.classList.add("fla-menu-close");
      header.classList.remove("fla-header-fullscreen");
      menubutton.classList.remove("fla-round-button-bg-active");
    } else {
      OPEN = true;
      //scrollLock.disablePageScroll();
      menu.classList.add("fla-menu-open");
      menu.classList.remove("fla-menu-close");
      header.classList.add("fla-header-fullscreen");
      menubutton.classList.add("fla-round-button-bg-active");
      window.history.pushState({ isMenu: true }, 'Menü');
    }
  };

// Home

function backHome() {
  if(OPEN) {
    toggleMenu();
    isMenu = false;
  };
  hideForm();
  setTimeout(function (){window.scrollTo(0, 0);}, 200);
  isModal = false;
}

// Modal

const modalForm = document.getElementById('apply');

function showForm() {
  window.history.pushState({ isModal: true }, 'Jelentkezés');
  scrollLock.disablePageScroll(modalForm);
  modalForm.scrollTop = 0;
  modalForm.classList.add('show');
};

function hideForm() {
  modalForm.classList.remove('show');
  scrollLock.enablePageScroll();
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
    hideForm();
//    scrollLock.enablePageScroll();
    isModal = false;
  }
};