import './pages/index.css';
import {initialCards} from './components/cards.js';
import {addLike, createCard, deleteCard} from './components/card.js';
import {openModal, closeModal, closePopapButton, closePopupByOverlay} from './components/modal.js';

const placesList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования профиля
const profileAddButton = document.querySelector('.profile__add-button'); // Кнопка добавления попапа карточки
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Попап добавления попапа карточки
const modalsOpen = document.querySelectorAll('.popup'); // Псевдомассив открытых попапов
const profileTitle = document.querySelector('.profile__title'); // Поле имя
const formEdit = document.forms['edit-profile']; // Форма имени
const popapTitle = formEdit.elements.name; // Имя
const profileDescription = document.querySelector('.profile__description'); // Поле профессия 
const popapDescription = formEdit.elements.description; // Профессия 
const formElement = document.forms['new-place'];
const namePlace = formElement.elements['place-name'];
const linkInput = formElement.elements.link;
const popupImageContainer = document.querySelector('.popup_type_image');
const popupImage = popupImageContainer.querySelector('.popup__image');
const imgContent = popupImageContainer.querySelector('.popup__caption');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');

initialCards.forEach(el => {
  const card = createCard(el, deleteCard, addLike, openImg);
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

// Вызов функции удаления попапа х3 
closePopapButton(popupTypeNewCard);
closePopapButton(popupTypeEdit);
closePopapButton(popupImageContainer);

// Закрытие попапа по оверлею и плавное открытие и закрытие попапов
modalsOpen.forEach((element) => {
    closePopupByOverlay(element)
    element.classList.add('popup_is-animated');
})

// Функция редактирования имени и информации о себе
function handleFormSubmit(evt) {
    evt.preventDefault();
    const popapTitleChange = popapTitle.value
    const popapDescriptionChange = popapDescription.value
    profileTitle.textContent = popapTitleChange
    profileDescription.textContent = popapDescriptionChange
    closeModal(popupTypeEdit);
}

// Функция добавления карточки по ссылке
function newCardFormSubmit(evt) {
    evt.preventDefault();
    const newObjects = {
      name: cardName.value,
      link: cardLink.value
    };
    const addCard = createCard(newObjects, deleteCard, openImg);
    placesList.prepend(addCard);
    formElement.reset();
    closeModal(popupTypeNewCard);
  }

// Обработчики сабмитов х2
formEdit.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', newCardFormSubmit)

// Функция открытия модальной карточки
function openImg(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  imgContent.textContent = item.name;
  openModal(popupImageContainer)
}



