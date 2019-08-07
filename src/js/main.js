"use strict";

const boxProjects = document.querySelector('.card-list');

fetch("https://api.github.com/users/Andrzej-Jablonski-project/repos?sort=desc")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const {
        name,
        description,
        html_url,
        homepage
      } = repo;
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
  })
  .catch(error => {
    console.log(error)
  })