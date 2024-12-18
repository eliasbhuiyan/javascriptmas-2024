const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
} 
function emojifyWord(word){
    if(word.startsWith(":") && word.endsWith(":")){
        const key = word.slice(1, -1)
        return hackedEmojis[key] || word
    }
    return word;
}

console.log(emojifyWord(":cry:"));

function emojifyPhrase(phrase){
    return phrase.split(" ").map(emojifyWord).join(" ")
}

console.log(emojifyPhrase("Those shoes :puke:"));