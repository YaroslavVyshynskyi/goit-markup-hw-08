(() => {
  const refs = {
    openModalBtn: document.querySelector(".menu-mob__open"),
    closeModalBtn: document.querySelector(".menu-mob__close"),
    modal: document.querySelector(".menu-mob"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();