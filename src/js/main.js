"use strict";

const boxProjects = document.querySelector('.wrapper-cards');

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
        const section = document.createElement('section');
        const icon = document.createElement('img');
        const projectName = document.createElement('h3');
        const desc = document.createElement('p');
        const footer = document.createElement('footer');
        const code = document.createElement('a');
        const demo = document.createElement('a');

        boxProjects.appendChild(section);
        section.appendChild(icon);
        section.appendChild(projectName);
        section.appendChild(desc);
        section.appendChild(footer);
        footer.appendChild(demo);
        footer.appendChild(code);

        section.classList.add('card');
        icon.classList.add('card__icon');
        projectName.classList.add('card__project-name');
        desc.classList.add('card__project-description');
        footer.classList.add('card__footer');
        demo.classList.add('card__link');
        code.classList.add('card__link', 'card__link--github');

        icon.setAttribute("src", "../assets/img/github-icon.svg");
        demo.setAttribute('href', homepage, );
        demo.setAttribute('target', '_blank');
        demo.setAttribute('rel', 'noopener');
        code.setAttribute('href', html_url);
        code.setAttribute('target', '_blank');
        code.setAttribute('rel', 'noopener');

        projectName.textContent = name;
        desc.textContent = description;
        demo.textContent = 'Demo';
        code.textContent = 'Github';
      }
    }
  })
  .catch(error => {
    console.log(error)
  })