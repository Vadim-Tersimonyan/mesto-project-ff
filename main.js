(()=>{"use strict";var e=document.querySelector("#card-template").content,t=function(e){e.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")},n=function(e,t){e.querySelector(".card__like-counter").textContent=t};function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),e.querySelector(".popup__form").reset()}function c(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var i=function(e,t,n){var o=Array.from(e.querySelectorAll(n.inputSelector)),r=e.querySelector(n.submitButtonSelector);t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?(u(e,t,n),l(o,r,n)):(a(e,t,t.validationMessage,n),l(o,r,n))},a=function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)},u=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)},l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(n){u(e,n,t)})),l(n,e.querySelector(t.submitButtonSelector),t)},d="https://mesto.nomoreparties.co/v1/wff-cohort-18",f="ee5d4bf5-3539-4ccf-a241-fba8d06d877d",p="application/json",m=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},y=function(e){return console.log(e),Promise.reject(e)};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=document.querySelector(".places__list"),S=document.querySelectorAll(".popup"),k=document.querySelector(".profile__edit-button"),C=document.querySelector(".popup_type_edit"),E=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup_type_image"),O=document.querySelector(".popup__image"),w=document.querySelector(".popup__caption"),j=document.forms["edit-profile"],P=j.elements.name,x=j.elements.description,D=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),T=document.querySelector(".profile__image"),z=document.forms["new-place"],B=z.elements["place-name"],I=z.elements.link,N=document.querySelector(".popup_type_confirmation"),H=document.forms["delete-card-confirmation"],J=document.querySelector(".popup_type_edit-avatar"),M=document.forms["edit-avatar"],V=M.elements.link,U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},W=null,F=null,G=null,K=function(t){var n,o,r,c,i,a,u,l,s,d,f,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",m={onOpenPopupData:Q,onDelete:R,onLikeCard:X},y=(n=_(_({},{cardData:t}),m),o=n.cardData,r=n.onDelete,c=n.onLikeCard,i=n.onOpenPopupData,u=(a=e.querySelector(".places__item.card").cloneNode(!0)).querySelector(".card__delete-button"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__image"),d=a.querySelector(".card__title"),f=a.querySelector(".card__like-counter"),s.src=o.link,s.alt=o.name,d.textContent=o.name,f.textContent=o.likes.length,s.addEventListener("click",(function(){i(o.link,o.name)})),o.owner._id!==o.ownerId&&(u.style.display="none"),o.likes.length>0&&o.likes.forEach((function(e){e._id===o.ownerId&&l.classList.add("card__like-button_is-active")})),u.addEventListener("click",(function(){r(o._id,a)})),l.addEventListener("click",(function(){c(o._id,a)})),a);g[p](y)},Q=function(e,t){O.src=e,O.alt=t,w.textContent=t,o(L)},R=function(e,t){W=e,F=t,o(N)},X=function(e,o){o.querySelector(".card__like-button").classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(d,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:f}}).then(m).catch(y)}(e).then((function(e){n(o,e.likes.length),t(o)})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(d,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:f}}).then(m).catch(y)}(e).then((function(e){n(o,e.likes.length),t(o)})).catch((function(e){console.log(e)}))};k.addEventListener("click",(function(){o(C),s(j,U),P.value=D.textContent,x.value=A.textContent})),E.addEventListener("click",(function(){o(q),s(z,U),B.value="",I.value=""})),T.addEventListener("click",(function(){o(J),s(M,U),V.value=""})),S.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")?r(t.target):t.target.classList.contains("popup__close")&&r(e)}))})),j.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.submitter;o.disabled=!0,o.style.cursor="not-allowed",o.textContent="Сохранение...",(t=P.value,n=x.value,fetch("".concat(d,"/users/me"),{method:"PATCH",headers:{authorization:f,"Content-Type":p},body:JSON.stringify({name:t,about:n})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.log(e)}))).then((function(t){D.textContent=t.name,A.textContent=t.about,e.target.reset(),r(C)})).catch((function(e){console.log(e)})).finally((function(){o.disabled=!1,o.textContent="Сохранить",o.style.cursor="pointer"}))})),z.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.submitter;o.disabled=!0,o.textContent="Сохранение...",o.style.cursor="not-allowed",(t=B.value,n=I.value,fetch("".concat(d,"/cards"),{method:"POST",headers:{authorization:f,"Content-Type":p},body:JSON.stringify({name:t,link:n})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.log(e)}))).then((function(t){var n=K(_(_({},t),{},{ownerId:G}));return e.target.reset(),r(q),n})).catch((function(e){console.log(e)})).finally((function(){o.disabled=!1,o.textContent="Сохранить",o.style.cursor="pointer"}))})),M.addEventListener("submit",(function(e){e.preventDefault();var t=e.submitter;t.disabled=!0,t.textContent="Сохранение...",t.style.cursor="not-allowed";var n,o=V.value;(n=o,fetch(n,{method:"HEAD"}).then((function(e){return!(!e.ok||!e.headers.get("content-type").startsWith("image/"))})).catch((function(e){return console.log(e)}))).then((function(t){var n;t?(n=o,fetch("".concat(d,"/users/me/avatar"),{method:"PATCH",headers:{authorization:f,"Content-Type":p},body:JSON.stringify({avatar:n})}).then(m).catch(y)).then((function(t){T.style.backgroundImage="url("+t.avatar+")",e.target.reset(),s(M,U),r(J)})).catch((function(e){console.log("Ошибка в получении картинки",e)})):console.log("Полученный url не является изображением")})).catch((function(e){console.log("Ошибка в проверке юрла",e)})).finally((function(){t.disabled=!1,t.textContent="Сохранить",t.style.cursor="pointer"}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){n.addEventListener("input",(function(){i(e,n,t)}))}))}(t,e))}))}(U),Promise.all([fetch("".concat(d,"/users/me"),{headers:{authorization:f,"Content-Type":p}}).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.log(e)})),fetch("".concat(d,"/cards"),{headers:{authorization:f,"Content-Type":p}}).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.log(e)}))]).then((function(e){G=e[0]._id,console.log(e[1]),D.textContent=e[0].name,A.textContent=e[0].about,T.style.backgroundImage="url("+e[0].avatar+")",e[1].forEach((function(t){K(_(_({},t),{},{ownerId:e[0]._id})),W=t._id}))})).catch((function(e){console.log(e)})),H.addEventListener("submit",(function(e){var t;e.preventDefault(),W&&F&&(t=W,fetch("".concat(d,"/cards/").concat(t),{method:"DELETE",headers:{authorization:f}}).then(m).catch(y)).then((function(e){"Пост удалён"===e.message?(F.remove(),W=null,F=null,r(N)):console.log(e.message)})).catch((function(e){console.log(e)}))}))})();
//# sourceMappingURL=main.js.map