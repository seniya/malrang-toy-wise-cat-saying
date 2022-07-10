import WiseCatSaying from "../dist/main.esm.js";

window.onload = function(){
  console.log('window.onload')
  const theCat = new WiseCatSaying('my-cat-card')
  const theWord = theCat.actionSay()
  console.log('theWord : ', theWord)
  theCat.render()
}