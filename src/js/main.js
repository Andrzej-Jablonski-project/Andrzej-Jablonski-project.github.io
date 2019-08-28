"use strict";

const boxProjects = document.querySelector('.card-list');

fetch("https://api.github.com/users/Andrzej-Jablonski-project/repos?sort=desc")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    const createCard = (name, description, homepage, html_url) => {
      if (description) {
        boxProjects.innerHTML += ` 
        <li class="card">
            <div class="card__container">
              <img src="../assets/img/github-icon.svg" alt="" class="card__icon">
              <h3 class="card__project-name">${name}</h3>
              <p class="card__project-description">${description}</p>
            </div>
            <footer class="card__footer">
          ${
            homepage ? `<a href="${homepage}" target="_blank" rel="nofollow noreferrer" class="card__link">Demo</a>` : ''
          }
              <a href="${html_url}" target="_blank" rel="nofollow noreferrer" class="card__link card__link--github">Github</a>
            </footer>
        </li>`;
      }
    }
    for (const repo of repos) {
      const {
        name,
        description,
        html_url,
        homepage
      } = repo;
      createCard(name, description, homepage, html_url);
    }

    function countCard(numberOfCard) {
      const cards = document.querySelectorAll('.card');
      const button = document.querySelector('.projects__button-more--js');
      for (let i = 0; i < cards.length; i++) {
        if (i > numberOfCard - 1) {
          cards[i].classList.add('card--off-js');
        }
      }
      button.addEventListener('click', () => {
        const cardsOff = document.querySelectorAll('.card--off-js');
        cardsOff.forEach(card => card.className = 'card card--on-js')
        button.style.display = 'none';
      })
    }
    countCard(4);
  })
  .catch(error => {
    console.log(error)
  })
const texts = ['Nie jest najważniejsze, byś był lepszy od innych.Najważniejsze jest, byś był lepszy od samego siebie z dnia wczorajszego.',
  'Ostatecznie, trudności to tylko rzeczy do przezwyciężenia.', '😀', '🃏', ' 😉'
]

texts.forEach(text => console.log(text))