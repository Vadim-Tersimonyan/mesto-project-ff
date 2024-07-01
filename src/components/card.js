export {createCard}

const createCard = ({name, link, openImg}) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const element = cardTemplate.querySelector(".card").cloneNode(true);
  const img = element.querySelector(".card__image");
  const title = element.querySelector(".card__title");
  const deleteButton = element.querySelector(".card__delete-button");
  const likeButton = element.querySelector('.card__like-button');
  deleteButton.addEventListener("click", (evt) => deleteCard(evt));
  likeButton.addEventListener('click', addLike);
  img.src = link;
  title.textContent = name;
  img.alt = name;
  img.addEventListener('click', () => openImg(name, link))
  return element;
};

// Функция удаления карточки
const deleteCard = (evt) => {
    evt.target.closest(".card").remove();
  };

// Функция добавления лайка
function addLike(evt) {
  evt.target.classList.add('card__like-button_is-active');
  }




