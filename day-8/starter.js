let guessArr = []

function renderGuess() {
    const guessHtml = guessArr.map((char) => {
        return `<div class="guess-char">${char}</div>`
    })
    guessContainer.innerHTML = guessHtml.join('')
}

function start() {
    for (let i = 0; i < word.length; i++) {
        guessArr.push('-')
    }
    renderGuess()
}

start()