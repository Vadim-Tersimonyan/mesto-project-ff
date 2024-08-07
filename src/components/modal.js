export { openPopup, closePopup };

function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClosePopup);  
};

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClosePopup);
};

function handleEscClosePopup (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};





