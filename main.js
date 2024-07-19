(()=>{"use strict";var e=function(e){var r=e.name,o=e.link,c=e.openImg,i=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),p=i.querySelector(".card__title"),a=i.querySelector(".card__delete-button"),s=i.querySelector(".card__like-button");return a.addEventListener("click",(function(e){return t(e)})),s.addEventListener("click",n),u.src=o,p.textContent=r,u.alt=r,u.addEventListener("click",(function(){return c(r,o)})),i},t=function(e){e.target.closest(".card").remove()};function n(e){e.target.classList.add("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=document.querySelector(".places__list"),l=document.querySelector(".popup_type_edit"),d=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_new-card"),f=document.querySelector(".profile__title"),v=document.forms["edit-profile"],_=v.elements.name,b=document.querySelector(".profile__description"),S=v.elements.description,k=document.forms["new-place"],g=document.querySelector(".popup_type_image"),q=g.querySelector(".popup__image"),j=g.querySelector(".popup__caption"),O=document.querySelector(".popup__input_type_card-name"),h=document.querySelector(".popup__input_type_url");function E(e,t){q.src=t,q.alt=e,j.textContent=e,r(g)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(t){var n=e(p(p({},t),{},{openImg:E}));s.append(n)})),d.addEventListener("click",(function(){r(l),_.value=f.textContent,S.value=b.textContent})),m.addEventListener("click",(function(){r(y)})),document.querySelectorAll(".popup").forEach((function(e){var t;(t=e).querySelector(".popup__close").addEventListener("click",(function(e){o(t)})),function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup_is-opened")&&o(e)}))}(e),e.classList.add("popup_is-animated")})),v.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=_.value,b.textContent=S.value,o(l)})),k.addEventListener("submit",(function(t){t.preventDefault();var n={name:O.value,link:h.value,openImg:E},r=e(n);s.prepend(r),k.reset(),o(y)}))})();
//# sourceMappingURL=main.js.map