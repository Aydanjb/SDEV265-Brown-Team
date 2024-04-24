const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');


function addDeckButton() {
    const deck = document.createElement('button');
    deck.classList.add('deck');
    deck.innerHTML = 'Deck';
    createDeckBtn.insertAdjacentElement('beforebegin', deck);
}

createDeckBtn.addEventListener('click', addDeckButton);

