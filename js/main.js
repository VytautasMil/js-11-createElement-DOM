'use strict';
console.log('main.js');

const divEl = document.createElement('div');

divEl.className = 'alert';

/// siukuriam <strong></strong>
const strongEl = document.createElement('strong');
strongEl.textContent = 'Hi there';

// divEl.appendChild(strongEl, ' This is and alert'); // prideda tik viena el
divEl.append(strongEl, ' This is and alert');

// divEl.textContent = ' This is and alert';

document.body.appendChild(divEl);

//  sarasas traversing the dom

const colorsListEl = document.getElementById('ul-colors');
console.log('colorsListEl ===', colorsListEl);
// tevinis el = parentElement
const sectionEl = colorsListEl.parentElement;
console.log('sectionEl ===', sectionEl);

// priekyje esantis el nextElementSibling
const pEl = colorsListEl.nextElementSibling;
pEl.style.fontSize = '50px';

const secondLiEl = colorsListEl.children[1];
secondLiEl.style.color = 'coral';