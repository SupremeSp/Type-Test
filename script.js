const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Pack my box with five dozen liquor jugs",
    "How razorback-jumping frogs can level six piqued gymnasts",
    "The five boxing wizards jump quickly"
];

let startTime;
let sentence;
let timer;

function startTest() {
    sentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById('sentence').innerText = sentence;
    document.getElementById('input').value = '';
    document.getElementById('speed').innerText = '';
    document.getElementById('accuracy').innerText = '';
    document.getElementById('input').disabled = false;
    document.getElementById('input').focus();
    startTime = new Date().getTime();
    clearInterval(timer);
    timer = setInterval(updateResults, 100);
}

function updateResults() {
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000 / 60; // time in minutes
    const inputText = document.getElementById('input').value;
    const wordCount = inputText.split(' ').filter(word => word.length > 0).length;
    const speed = Math.round(wordCount / timeElapsed);
    const accuracy = calculateAccuracy(inputText, sentence);
    document.getElementById('speed').innerText = `Speed: ${speed} WPM`;
    document.getElementById('accuracy').innerText = `Accuracy: ${accuracy}%`;
}

function calculateAccuracy(input, sentence) {
    const inputWords = input.split(' ');
    const sentenceWords = sentence.split(' ');
    let correctWords = 0;
    for (let i = 0; i < inputWords.length; i++) {
        if (inputWords[i] === sentenceWords[i]) {
            correctWords++;
        }
    }
    return Math.round((correctWords / sentenceWords.length) * 100);
}

function checkInput() {
    if (document.getElementById('input').value === sentence) {
        clearInterval(timer);
        updateResults();
        document.getElementById('input').disabled = true;
    }
}
