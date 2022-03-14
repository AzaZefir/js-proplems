let text = prompt('Введите текст')

function lengthOfLastWord(text) {
    let len = 0;
    text = text.trim();

    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            len = 0;
        } else {
            len++;
        }
    }

    return len;

}
console.log(lengthOfLastWord(text));