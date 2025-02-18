import React from 'react'

/**
 * formats from float to integer percentage
 * @param  {number} float a float smaller than zero (like 0.657)
 * @return {string}       the float turned into percentage + symbol (66%)
 */
export function formatPercentage(float) {
  return `${(float * 100).toFixed(0)}%`;
}

/**
 * formats from date obj to YYYY-MM-DD
 * @param  {date} dateObj [description]
 * @return {string}         YYYY-MM-DD
 */
export function formatDateObjForBackend(dateObj) {
  return dateObj.toISOString().substr(0, 10);
}

/**
 * Fill left of the string with some char
 * @param  {string} w the original string
 * @param  {number} len the length that the string must have
 * @param  {string} char the char taht will be used to fill the difference. defaults to ' '
 * @return {string} the new string
 */
export const leftPad = (w, len, char) => {
  let str = String(w);
  const ch = !char && char !== 0 ? ' ' : char;
  const l = len - str.length;

  for (let i = 0; i < l; i += 1) {
    str = ch + str;
  }

  return str;
};

/**
 * takes in a single word and capitalizes its first letter. Can be used for sentences,
 * but only the first word will have its firts letter capitalized
 * @param  {string} word   a word or sentence
 * @return {string}        same word or sentence but with the first letter uppercased
 */
export function capitalizeWord(word) {
  return word.charAt(0).toLocaleUpperCase() + word.substring(1);
}

/**
 * gives title-style capitalization to a sentence (a.k.a. every word in it gets a capital letter)
 * note that it will remove any uppercasing that is in the middle as well, "normalizing" the string
 * @param  {string} sentence sentence or single word
 * @return {string}          same sentence but with every word capitalized
 */
export function capitalizeTitle(sentence) {
  const lowercaseWords = sentence.toLocaleLowerCase().split(' ');
  return lowercaseWords.map(word => capitalizeWord(word)).join(' ');
}

export const formatPercent = n => `${n < 0 ? '-' : ''}${(Math.abs(n) * 100).toFixed(0)}%`;

export const snakeToCamel = str => {
  const words = str.split('_');
  const capitalize = words.slice(1).map(word => capitalizeWord(word));
  return `${words[0]}${capitalize.join('')}`;
};

export const abbrevName = name => name
  .replace(/\s+/g, ' ')
  .replace(/promotoria de (justiça de )?investiga[çc][aã]o penal/gi, 'PIP')
  .replace(/promotoria de justi[çc]a de tutela coletiva/gi, 'PJTC');


export function highlightJSX(value, find) {
  if (!value) return value;
  // sanitize and remove accents
  const str = value.toString();
  const normalizedStr = str.normalize('NFD').replace(/\p{M}/gu, '');
  const regex = new RegExp(
    find
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'),
    'ig',
  );
  const matches = normalizedStr.matchAll(regex);
  const result = [];
  let i = 0;
  let slicedStr = '';
  let match = matches.next();
  while (!match.done) {
    const matchIndex = match.value.index;
    slicedStr = str.slice(i, matchIndex);
    result.push(slicedStr);
    i = matchIndex + find.length;
    slicedStr = str.slice(matchIndex, i);
    result.push(<mark>{slicedStr}</mark>);
    match = matches.next();
  }
  slicedStr = str.slice(i);
  result.push(slicedStr);
  return result;
}