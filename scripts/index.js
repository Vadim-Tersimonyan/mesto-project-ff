// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
const createCard = (name, link) => {
  const element = cardTemplate.cloneNode(true);
  const img = element.querySelector(".card__image");
  const title = element.querySelector(".card__title");
  const deleteButton = element.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", (evt) => deleteCard(evt));
  img.src = link;
  title.textContent = name;
  img.alt = name;
  return element;
}
// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest(".card").remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach(el => {
  const card = createCard(el.name, el.link);
  placesList.append(card);
});