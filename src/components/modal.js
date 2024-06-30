export {openModal, closeModal, closePopapButton, closePopupByOverlay};

// Фунция открытия попапа
function openModal(element) {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEscPopap)
}

// Фунция закрытия попапа
function closeModal(element) {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeEscPopap)
}

// Функция навешивания обработчика кнопки удаления попапа
function closePopapButton(element) {
    const popupCloseButton = element.querySelector('.popup__close');
    popupCloseButton.addEventListener('click', (evt) => {
      closeModal(element)
    })
}

// Функция закрытия попапа по кнопке Escape
function closeEscPopap(evt) {
    if (evt.key === 'Escape') {
        const popapOpened = document.querySelector('.popup_is-opened');
        closeModal(popapOpened)
    }
}

// Функция закрытия попапа по оверлею
function closePopupByOverlay(element) {
  element.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeModal(element);
    }
  })
};





