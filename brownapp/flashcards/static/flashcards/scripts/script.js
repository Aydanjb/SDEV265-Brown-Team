const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');
const allDecks = document.querySelectorAll('.deck');
const main = document.querySelector('main');
const cardModal = document.getElementById('cardModal');
const saveCard = document.getElementById('saveCard');
const saveDeck = document.getElementById('saveDeck');

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

function clearCards() {
    const card = document.querySelectorAll('.card');
    card.forEach(element => {
        element.remove();
    });
}

function openDeckModal() {
    deckModal.style.display = 'block';
}

function closeDeckModal() {
    deckModal.style.display = 'none';
}

function addDeckButton() {
    openDeckModal();
}

function addFlipping() {
    const card = document.querySelectorAll('.card');
    card.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('flipped');
        });
    });
}

function createAddCardButton() {
    const addCard = document.createElement('button');
    addCard.classList.add('addCard');
    addCard.innerHTML = 'Add Card';
    main.appendChild(addCard);
    addCard.addEventListener('click', openCardModal);
}

function openCardModal() {   
    cardModal.style.display = 'block';
}

function closeCardModal() {
    cardModal.style.display = 'none';
}

createDeckBtn.addEventListener('click', addDeckButton);

allDecks.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('active')) {
            return;
        }
        else {
            removeActive();
            clearCards();
            createAddCardButton();
            displayCards();
            makeActive(element);
            addFlipping();
        }
    });
});

saveCard.addEventListener('click', () => {
    const front = document.getElementById('front-input').value;
    const back = document.getElementById('back-input').value;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="front">
            <p>${front}</p>
        </div>
        <div class="back">
            <p>${back}</p>
        </div>
    `;
    main.appendChild(card);
    closeCardModal();
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    document.getElementById('front').value = '';
    document.getElementById('back').value = '';
});

saveDeck.addEventListener('click', () => {
    const deck = document.createElement('button');
    deck.classList.add('deck');
    deck.innerHTML = document.getElementById('deck-input').value;
    createDeckBtn.insertAdjacentElement('beforebegin', deck);
    document.getElementById('deck-input').value = '';
    deck.addEventListener('click', () => {
        if (deck.classList.contains('active')) {
            return;
        }
        else {
            removeActive();
            clearCards();
            createAddCardButton();
            displayCards();
            makeActive(deck);
            addFlipping();
        }
    });
    closeDeckModal();
});

deckModal.addEventListener('click', (e) => {
    if (e.target === deckModal) {
        closeDeckModal();
    }
});

cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
        closeCardModal();
    }
});