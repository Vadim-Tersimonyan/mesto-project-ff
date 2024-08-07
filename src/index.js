import './pages/index.css';
import { createCard, displayDeleteCard, displayLikeCard, updateCardLikes } from './components/card.js';
import { openPopup, closePopup } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { 
  getUserInfo, 
  getInitialCards, 
  editUserInfo, 
  addCard,
  fetchDeleteCard,
  putLike,
  deleteLike,
  patchAvatar,
  checkImgUrl
} from './components/api.js';

const cardsContainer = document.querySelector('.places__list');
const popups = document.querySelectorAll('.popup');
const profileButton = document.querySelector('.profile__edit-button'); 
const profilePopup = document.querySelector('.popup_type_edit');
const newCardAddButton = document.querySelector('.profile__add-button');
const newCardAddPopup = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');
const popupImgImage = document.querySelector('.popup__image');
const popupImgCaption = document.querySelector('.popup__caption');
const profileForm = document.forms['edit-profile'];
const profileFormNameInput = profileForm.elements['name'];
const profileFormJobInput = profileForm.elements['description'];
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileImg = document.querySelector('.profile__image');
const addCardForm = document.forms['new-place'];
const addCardFormNameInput = addCardForm.elements['place-name'];
const addCardFormLinkInput = addCardForm.elements['link'];
const confirmationPopup = document.querySelector('.popup_type_confirmation');
const confirmationForm = document.forms['delete-card-confirmation'];
const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
const editAvatarForm = document.forms['edit-avatar'];
const editAvatarFormLinkInput = editAvatarForm.elements['link'];
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

let idCardForDelete = null;
let cardElementForDelete = null;
let userId = null;

const renderCard = (item, method = 'prepend') => {
  const cardDataConfig = {
    onOpenPopupData: openPopupData,
    onDelete: cardDelete,
    onLikeCard: likeCard
  };
  const itemObject = {
    cardData: item
  }
  const card = createCard({ ...itemObject, ...cardDataConfig });
  cardsContainer[method](card);
}

const handleAddCardForm = (evt) => {
  evt.preventDefault();
  const addCardSubmitButton = evt.submitter;
  addCardSubmitButton.disabled = true; 
  addCardSubmitButton.textContent = 'Сохранение...';
  addCardSubmitButton.style.cursor = 'not-allowed';
  addCard(addCardFormNameInput.value, addCardFormLinkInput.value)
    .then((result) => {
      const card = renderCard({ ...result, ownerId: userId }, 'prepend');
      evt.target.reset();
      closePopup(newCardAddPopup);
      return card;
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      addCardSubmitButton.disabled = false;
      addCardSubmitButton.textContent = 'Сохранить';
      addCardSubmitButton.style.cursor = 'pointer';
    });
}

const openPopupData = (link, name) => {
  popupImgImage.src = link;
  popupImgImage.alt = name;
  popupImgCaption.textContent = name;
  openPopup(popupImg);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const profileFormButton = evt.submitter;
  profileFormButton.disabled = true; 
  profileFormButton.style.cursor = 'not-allowed';
  profileFormButton.textContent = 'Сохранение...';
  editUserInfo(profileFormNameInput.value, profileFormJobInput.value)
    .then((result) => {
      profileName.textContent = result.name;
      profileJob.textContent = result.about;
      evt.target.reset();
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileFormButton.disabled = false; 
      profileFormButton.textContent = 'Сохранить';
      profileFormButton.style.cursor = 'pointer';
    });
};

const handleEditAvatarForm = (evt) => {
  evt.preventDefault();
  const editAvatarSubmitButton = evt.submitter;
  editAvatarSubmitButton.disabled = true; 
  editAvatarSubmitButton.textContent = 'Сохранение...';
  editAvatarSubmitButton.style.cursor = 'not-allowed';
  const imgUrl = editAvatarFormLinkInput.value;
  checkImgUrl(imgUrl)
    .then((isValid) => {
      if (isValid) {
        patchAvatar(imgUrl)
          .then((result) => {
            profileImg.style.backgroundImage = 'url(' + result.avatar + ')';
            evt.target.reset();
            clearValidation(editAvatarForm, validationConfig);
            closePopup(editAvatarPopup);
          })
          .catch((err) => {
            console.log('Ошибка в получении картинки',err);
          });
      } else {
        console.log('Полученный url не является изображением');
      }
    })
    .catch((err) => {
      console.log('Ошибка в проверке юрла', err);
    })
    .finally(() => {
      editAvatarSubmitButton.disabled = false; 
      editAvatarSubmitButton.textContent = 'Сохранить';
      editAvatarSubmitButton.style.cursor = 'pointer';
    })
}

const cardDelete = (cardId, cardElement) => {
  idCardForDelete = cardId;
  cardElementForDelete = cardElement;
  openPopup(confirmationPopup);
};

const likeCard = (cardId, cardElement) => {
  if (cardElement.querySelector('.card__like-button').classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
      .then((result) => {
        updateCardLikes(cardElement, result.likes.length);
        displayLikeCard(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    putLike(cardId)
    .then((result) => {
      updateCardLikes(cardElement, result.likes.length);
      displayLikeCard(cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

profileButton.addEventListener('click', () => {
  openPopup(profilePopup);
  clearValidation(profileForm, validationConfig);
  profileFormNameInput.value = profileName.textContent;
  profileFormJobInput.value = profileJob.textContent;
});

newCardAddButton.addEventListener('click', () => {
  openPopup(newCardAddPopup);
  addCardForm.reset();
  clearValidation(addCardForm, validationConfig);
});

profileImg.addEventListener('click', () => {
  openPopup(editAvatarPopup);
  editAvatarForm.reset();
  clearValidation(editAvatarForm, validationConfig);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(evt.target);
    }
    else if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
});

profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardForm); 
editAvatarForm.addEventListener('submit', handleEditAvatarForm);

enableValidation(validationConfig);

Promise.all([getUserInfo(), getInitialCards()])
  .then((results) => {
    userId = results[0]._id;
    console.log(results[1]);
    profileName.textContent = results[0].name;
    profileJob.textContent = results[0].about;
    profileImg.style.backgroundImage = 'url(' + results[0].avatar + ')';
    results[1].forEach(cardData => {
      renderCard({ ...cardData, ownerId: results[0]._id}, 'append');
      idCardForDelete = cardData._id;
    })
  })
  .catch((err) => {
    console.log(err);
  });

confirmationForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (idCardForDelete && cardElementForDelete) {
    fetchDeleteCard(idCardForDelete)
      .then((result) => {
        if (result.message === 'Пост удалён') {
          displayDeleteCard(cardElementForDelete);
          idCardForDelete = null;
          cardElementForDelete = null;
          closePopup(confirmationPopup);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});



