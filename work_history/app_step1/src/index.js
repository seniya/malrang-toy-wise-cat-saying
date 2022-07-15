import { wiseword } from './wiseword.js'

console.log('wiseword : ', wiseword);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomWord = wiseword[getRandomInt(0,24)]

document.getElementById('wise_name').textContent = randomWord.name
document.getElementById('wise_contents').textContent = randomWord.contents