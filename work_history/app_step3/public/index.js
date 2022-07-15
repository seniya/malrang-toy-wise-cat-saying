import WiseWord from "../src/wiseWord.js";


window.onload = function(){
  console.log('window.onload')

  const theCat = new WiseWord('my-cat-card')
  const theWord = theCat.actionSay()
  console.log('theWord : ', theWord)
  theCat.render()
  
}