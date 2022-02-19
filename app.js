const keyboard = document.querySelector('.keyboard-container')
const gameboard = document.querySelector('.game-container')
const message = document.querySelector('.message-container')

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
        guessLetter.classList = 'key-tile';
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
    keyTile.setAttribute('id',key);
    keyTile.addEventListener('click',() => handleClick(key))
    keyboard.append(keyTile);
});

const handleClick = (key) => {
    console.log(key);
};

