const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');
const allDecks = document.querySelectorAll('.deck');
const main = document.querySelector('main');
const addCardBtn = document.querySelector('.addCard');
const cardModal = document.getElementById('cardModal');
const saveCard = document.getElementById('saveCard');
const saveDeck = document.getElementById('saveDeck');

function openDeckModal() {
    deckModal.style.display = 'block';
}

function closeDeckModal() {
    deckModal.style.display = 'none';
}

function addFlipping() {
    const card = document.querySelectorAll('.card');
    card.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('flipped');
        });
    });
}

function openCardModal() {   
    cardModal.style.display = 'block';
}

function closeCardModal() {
    cardModal.style.display = 'none';
}


createDeckBtn.addEventListener('click', openDeckModal);

saveDeck.addEventListener('click', closeDeckModal);

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

addFlipping();
addCardBtn.addEventListener('click', openCardModal);
