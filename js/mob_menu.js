(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-mob__open"),
    closeMenuBtn: document.querySelector(".menu-mob__close"),
    menu: document.querySelector(".menu-mob"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();