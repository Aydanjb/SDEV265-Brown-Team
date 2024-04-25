const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');
const deck = document.querySelectorAll('.deck');
const main = document.querySelector('main');

const cards = [
    {
    'front': 'What is the captial of France?',
    'back': 'Paris'
    },
    {
    'front': 'What is the captial of Germany?',
    'back': 'Berlin'
    }
]

function addDeckButton() {
    const deck = document.createElement('button');
    deck.classList.add('deck');
    deck.innerHTML = 'Deck';
    createDeckBtn.insertAdjacentElement('beforebegin', deck);
}

function displayCards() {
    cards.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front">
                <p>${element.front}</p>
            </div>
            <div class="back">
                <p>${element.back}</p>
            </div>
        `;
        main.appendChild(card);
    });
}

deck.forEach(element => {
    element.addEventListener('click', displayCards);
});
createDeckBtn.addEventListener('click', addDeckButton);

