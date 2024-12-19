// The keyboard has been rendered for you
const keyboardContainer = document.getElementById('keyboard-container')
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function renderKeyboard () {
    const keyBoardHtml = letters.map((letter) => {
        return `<button class="letter" aria-label="Guess letter ${letter}" id=${letter}>${letter}</button>`
    })
    keyboardContainer.innerHTML = keyBoardHtml.join('')
}
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')
let chancesReminder = document.querySelector('.chances')
let sunglasses = document.querySelector('.sunglasses')

// Set the word to guess
const word = "gift"
// 6 guesses for the 6 parts of the snowman
let guesses = 6

for(let i = 0; i < word.length; i++){
    let inputBox = document.createElement("input")
    inputBox.classList.add("inputBox")
    inputBox.placeholder = "-";
    inputBox.type = "text"
    guessContainer.appendChild(inputBox)
}
 
let finalWords = [];
const guessContainerMatch  = (inputes)=>{
    guesses--;
    chancesReminder.innerHTML = `You have ${guesses} chances`;
    let allInputBox = document.querySelectorAll(".inputBox")
    let indexOfWord = word.indexOf(inputes)
    if(guesses > 0){
        if(indexOfWord >= 0){ 
            allInputBox[indexOfWord].value = inputes;              
            allInputBox.forEach((items,i)=>{
              finalWords[i] = items.value;
            })
            if(finalWords.join('') == word){
              chancesReminder.innerHTML = "";
              guessContainer.innerHTML = "You Win!";
              sunglasses.style.visibility = "visible";
            }
        }else{
            snowmanParts[guesses].remove()
        }
    }else{
        chancesReminder.innerHTML = "";
        guessContainer.innerHTML = "You Lose!";
    }
}
function checkGuess(e) {
    let button = e.target
    if(button.tagName == "BUTTON"){
        guessContainerMatch(button.innerHTML)
        button.disabled = true;
        button.style ="background: #f0c419; cursor: not-allowed"
    }
}

renderKeyboard()
