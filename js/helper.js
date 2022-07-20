'use strict';
/**
 * this function craates element adds class and text
 * @param {string} tag = tag of the element
 * @param {string} className  = clase
 * @param {string} text
 * @returns {HTMLElement}
 */
function createProperEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
/**
 *
 * @param {*} tag
 * @param {*} className
 * @param {*} text
 * @param {HTMLElement} dest
 * @returns
 */
function createProperElAndAppend(tag, className, text, dest) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  // debugger;
  if (dest) dest.append(el);
  return el;
}

// const h3El = createProperEl('h3', 'title_a', 'JS');

// console.log('h3El ===', h3El);