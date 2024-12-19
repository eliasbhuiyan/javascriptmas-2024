const keyboardContainer = document.getElementById('keyboard-container')
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function renderKeyboard () {
    const keyBoardHtml = letters.map((letter) => {
        return `<button class="letter" aria-label="Guess letter ${letter}" id=${letter}>${letter}</button>`
    })
    keyboardContainer.innerHTML = keyBoardHtml.join('')
}

export { renderKeyboard }