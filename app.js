import {words} from "/wordList.js";

const keyboard = document.querySelector('.keyboard-container')
const gameboard = document.querySelector('.guess-container')

let rowIndex = 0;
let letterIndex = 0;

const randWord = () => {Math.floor(Math.random() * words.length)}

const gameWord = randWord(words)
console.log(gameWord)

const gameRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
];
gameRows.forEach((row, rowIndex) =>{
    const guessRow = document.createElement('div');
    guessRow.classList = 'guess-row';
    guessRow.setAttribute('id',`guess${rowIndex}`);
    row.forEach((letter, letterIndex)=>{
        const guessLetter = document.createElement('div');
        guessLetter.setAttribute('id',`guess${rowIndex}-letter${letterIndex}`);
        guessRow.append(guessLetter);
    });
    gameboard.append(guessRow);
})

const alpha = [
    'Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'Ent','Z','X','C','V','B','N','M','Del'
];
alpha.forEach(key => {
    const keyTile = document.createElement('button');
    keyTile.textContent = key;
    keyTile.addEventListener('click',() => handleClick(key))
    keyTile.setAttribute('id',key)
    keyboard.append(keyTile);
});

document.addEventListener('keypress',(e) => {
    const key = e.key.toUpperCase()
    switch(key){
        case 'ENTER':
            checkWord()
            break
        case "BACKSPACE":
        case "DELETE":
            delLetter()
            break
        default:
            addLetter(key)
    }
});

const handleClick = (key) => {
    if(key == 'Ent'){
        checkWord()
    } else if (key == 'Del'){
        delLetter()
    }else {
        addLetter(key) 
    }
};

const addLetter = (key) =>{
    if(letterIndex > 4){
        return
    }else {
        const tile = document.getElementById(`guess${rowIndex}-letter${letterIndex}`)
        gameRows[rowIndex][letterIndex] = key;
        tile.textContent = key
        letterIndex ++
    }
};
    
const checkWord = () => {
    if(letterIndex < 4){
        return
    } else {
        const sample = gameRows[rowIndex].join('');
        console.log(`word to eval is ${sample}`)
        if(sample == gameWord){
            checkLetters()
            console.log('WINNNNNNN')
        } else{
            console.log('LOSER')
            checkLetters()
            rowIndex ++
            letterIndex = 0
        }
    }
};

const delLetter = () => {
    if (letterIndex > 0){
        letterIndex --
        const tile = document.getElementById(`guess${rowIndex}-letter${letterIndex}`)
        gameRows[rowIndex][letterIndex] = ''
        tile.textContent = ''
    }
};

const checkLetters = () =>{
    let sample = gameRows[rowIndex].join('');
    for(let i = 0; i< sample.length; i++){
        const tile = document.getElementById(`guess${rowIndex}-letter${i}`)
        const letterTile = document.getElementById(sample[i])
        if (gameWord[i] == sample[i]){
            console.log(`checking letter ${i}`)
            setTimeout(() => {tile.classList = 'right-spot'},300*i)
            setTimeout(() => {letterTile.classList = 'right-spot'},300*i)
        }
        else if (gameWord.includes(sample[i])){
            console.log(`checking letter ${i}`)
            setTimeout(() => {tile.classList = 'in-word'},300*i)
            setTimeout(() => {letterTile.classList = 'in-word'},300*i)
            console.log(sample)
            
        } else {
            letterTile.classList = 'used'
        }
    }
}