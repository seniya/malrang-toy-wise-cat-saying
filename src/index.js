
import { getRandomInt } from "./util.js"
import { words } from "./words.js"
import catStyle_ from "./style.css";

export class WiseWord {

  style = catStyle_
  words = words
  targetElement = ''
  imageUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif'

  constructor(targetElement_) {
    console.log('WiseWord module start targetElement: ', targetElement_ )
    // console.log('catStyle_ : ', catStyle_)
    this.targetElement = targetElement_
    this.setStyle()
  }

  setStyle() {
    const styleSheet = document.createElement("style")
    styleSheet.innerText = this.style
    document.head.appendChild(styleSheet)
  }

  getTemplate() {
    const randomWord = this.actionSay()
    return `
      <div class="wcs-container">
        <div class="wcs-card">
          <div class="wcs-card__image">
            <img 
              src="${this.imageUrl}" 
              style="display: block;">
          </div>          
          <div id="wise_name" class="wcs-card__name">${randomWord.name}</div>
          <div id="wise_contents" class="wcs-card__contents">${randomWord.contents}</div>
        </div>
      </div>
    `
  }

  actionSay () {
    const seedNumber = getRandomInt(0,24)
    const randomWord = this.words[seedNumber]
    return randomWord
  }

  render() {
    const template = this.getTemplate()
    document.querySelector(`#${this.targetElement}`).insertAdjacentHTML(
      'afterbegin',
      template
    )
  }
}