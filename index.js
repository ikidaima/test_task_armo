'use strict';

const LOCAL_HOST = 'http://localhost:8888';

const textElem = document.querySelector('.js-text');
const buttonElem = document.querySelector('.js-button');

buttonElem.addEventListener('click', onClickButton);

function onClickButton() {
  fetch(LOCAL_HOST)
    .then(response => {
      return response.text();
    })
    .then(text => {
      textElem.textContent = text;
    });
}