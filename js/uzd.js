'use strict';
// uzd 1

/**
 * Function crates section el and puts it to body
 */
function createSection() {
  // kuriam elementus
  const sectionEl = document.createElement('section');

  sectionEl.className = 'card';
  const h2El = document.createElement('h2');
  // h2El.setAttribute('id', 'yes');
  h2El.id = 'yes';
  h2El.textContent = 'Section title';
  console.log('h2El ===', h2El);
  const pEl = document.createElement('p');
  pEl.className = 'text';
  pEl.textContent = 'Hello i am section text';

  // dedam vidinius section elementus
  sectionEl.append(h2El, pEl);
  // ideti i body
  document.body.append(sectionEl);
}
// createSection(articleEl);
// createSection();

// function createArticle() {
//   const articleEl = createProperEl('article', 'card', '');
//   const h3El = createProperEl('h3', 'title_a', 'JS');
//   const pDateEl = createProperEl('p', 'date', '2022 02 15');
//   const pTextEl = createProperEl(
//     'p',
//     'text',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?'
//   );
//   articleEl.append(h3El, pDateEl, pTextEl);
//   document.body.append(articleEl);
// }
// createArticle();

function createArticleAndAppend() {
  const articleEl = createProperElAndAppend('article', 'card', '', document.body);
  createProperElAndAppend('h3', 'title_a', 'JS', articleEl);
  createProperElAndAppend('p', 'date', '2022 02 15', articleEl);
  createProperElAndAppend(
    'p',
    'text',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?',
    articleEl
  );
  // articleEl.append(h3El, pDateEl, pTextEl);
  // document.body.append(articleEl);
}
createArticleAndAppend();
createProperEl('li', '', 'Pirmadienis');