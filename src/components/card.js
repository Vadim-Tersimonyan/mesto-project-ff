export {createCard, deleteCard, addLike}

const createCard = (el, deleteCard, addLike, openImg) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const element = cardTemplate.cloneNode(true);
  const img = element.querySelector(".card__image");
  const title = element.querySelector(".card__title");
  const deleteButton = element.querySelector(".card__delete-button");
  const likeButton = element.querySelector('.card__like-button');
  deleteButton.addEventListener("click", (evt) => deleteCard(evt));
  likeButton.addEventListener('click', addLike);
  img.src = el.link;
  title.textContent = el.name;
  img.alt = el.name;
  img.addEventListener('click', () => openImg(el))
  return element;
};

// Функция удаления карточки
const deleteCard = (evt) => {
    evt.target.closest(".card").remove();
  };

// Функция добавления лайка
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
  }


