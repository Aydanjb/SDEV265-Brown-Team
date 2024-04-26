const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');
const allDecks = document.querySelectorAll('.deck');
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

function removeActive() {
    const allDecks = document.querySelectorAll('.deck');
    allDecks.forEach(element => {
        element.classList.remove('active');
    });
}

function makeActive(ele) {
    ele.classList.add('active');
}

allDecks.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('active')) {
            return;
        }
        else {
            removeActive();
            clearCards();
            displayCards();
            makeActive(element);
        }
    });
});

function clearCards() {
    const card = document.querySelectorAll('.card');
    card.forEach(element => {
        element.remove();
    });
}

function addDeckButton() {
    const deck = document.createElement('button');
    deck.classList.add('deck');
    deck.addEventListener('click', () => {
        if (deck.classList.contains('active')) {
            return;
        }
        else {
            removeActive(); 
            clearCards();
            displayCards();
            makeActive(deck);
        }
    });
    deck.innerHTML = 'Deck';
    createDeckBtn.insertAdjacentElement('beforebegin', deck);
}

createDeckBtn.addEventListener('click', addDeckButton);

