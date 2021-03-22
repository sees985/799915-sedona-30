const modal = document.querySelector('.modal');
const entryDateInput = modal.querySelector('[name="entry-date"]');
modal.classList.add('modal-hide')
const toggleModalButton = document.querySelector('.search-hotel-button');
toggleModalButton.addEventListener('click', () => {
  modal.classList.toggle('modal-hide');
  if (modal.classList.contains('modal-hide') !== true) {
    entryDateInput.focus();
  }
})
