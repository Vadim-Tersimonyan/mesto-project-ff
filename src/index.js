import './pages/index.css';
import {initialCards} from './components/cards.js';
import {createCard} from './components/card.js';
import {openModal, closeModal, closePopapButton, closePopupByOverlay} from './components/modal.js';

const placesList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования профиля
const profileAddButton = document.querySelector('.profile__add-button'); // Кнопка добавления попапа карточки
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Попап добавления попапа карточки
const profileTitle = document.querySelector('.profile__title'); // Поле имя
const formEditProfile = document.forms['edit-profile']; // Форма имени
const popapTitle = formEditProfile.elements.name; // Имя
const profileDescription = document.querySelector('.profile__description'); // Поле профессия 
const popapDescription = formEditProfile.elements.description; // Профессия 
const formNewPlace = document.forms['new-place'];
const popupImageContainer = document.querySelector('.popup_type_image');
const popupImage = popupImageContainer.querySelector('.popup__image');
const imgContent = popupImageContainer.querySelector('.popup__caption');
const popupCardName = document.querySelector('.popup__input_type_card-name');
const popupTypeUrl = document.querySelector('.popup__input_type_url');

initialCards.forEach(el => {
  const card = createCard({...el, openImg});
  placesList.append(card);
});

//Обработчик кнопки вызозова попапа
profileEditButton.addEventListener('click', () => {
  openModal(popupTypeEdit);
    popapTitle.value = profileTitle.textContent;
    popapDescription.value = profileDescription.textContent;
})

// Обработчик кнопки добавления попапа карточки
profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard);
})

document.querySelectorAll('.popup').forEach( popup => {
  closePopapButton(popup);
  closePopupByOverlay(popup) ;
  popup.classList.add('popup_is-animated');
}); 

// Функция редактирования имени и информации о себе
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popapTitle.value
    profileDescription.textContent = popapDescription.value
    closeModal(popupTypeEdit);
}

// Функция добавления карточки по ссылке
function newCardFormSubmit(evt) {
    evt.preventDefault();
    const newObjects = {
      name: popupCardName.value,
      link: popupTypeUrl.value,
      openImg
    };
    const addCard = createCard(newObjects);
    placesList.prepend(addCard);
    formNewPlace.reset();
    closeModal(popupTypeNewCard);
  }
  
// Обработчики сабмитов х2
formEditProfile.addEventListener('submit', handleFormSubmit);
formNewPlace.addEventListener('submit', newCardFormSubmit)

 // Функция открытия модальной карточки
 function openImg(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  imgContent.textContent = name;
  openModal(popupImageContainer)
}




