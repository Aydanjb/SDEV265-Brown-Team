const createDeckBtn = document.getElementById('createDeck');
const decks = document.getElementById('decks');
const allDecks = document.querySelectorAll('.deck');
const main = document.querySelector('main');
const addCardBtn = document.querySelector('.addCard');
const cardModal = document.getElementById('cardModal');
const saveCard = document.getElementById('saveCard');
const saveDeck = document.getElementById('saveDeck');
const cardSlides = document.getElementById('cardSlides');
const cardSlide = document.getElementById('cardSlide');
const nextSlide = document.getElementById('right-arrow');
const prevSlide = document.getElementById('left-arrow');

function openDeckModal() {
    deckModal.style.display = 'block';
}

function closeDeckModal() {
    deckModal.style.display = 'none';
}

function addFlipping() {
    cardSlide.addEventListener('click', () => {
        cardSlide.classList.toggle('flipped');
    });
}

function openCardModal() {   
    cardModal.style.display = 'block';
}

function closeCardModal() {
    cardModal.style.display = 'none';
}

function openCardSlides() {
    cardSlides.style.display = 'flex';
}

function closeCardSlides() {
    cardSlides.style.display = 'none';
}

function getCardDataByElement(element) {
    const front = element.querySelector('.front').textContent;
    const back = element.querySelector('.back').textContent;
    const cardId = element.getAttribute('data-id');
    const cardIndex = element.getAttribute('data-index');
    cardData = [front, back, cardId, cardIndex];
    return cardData;
}

function getCardDataById(id) {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    const front = card.querySelector('.front').textContent;
    const back = card.querySelector('.back').textContent;
    const cardId = card.getAttribute('data-id');
    const cardIndex = card.getAttribute('data-index');
    cardData = [front, back, cardId, cardIndex];
    return cardData;
}

function populateCardSlide(cardData) {
    const front = cardData[0];
    const back = cardData[1];
    const cardId = cardData[2];
    const cardIndex = cardData[3];
    cardSlide.setAttribute('data-id', cardId);
    cardSlide.setAttribute('data-index', cardIndex);
    cardSlide.innerHTML = `
        <div class="front">
            <p>${front}</p>
        </div>
        <div class="back">
            <p>${back}</p>
        </div>
    `;
    const deleteCardBtn = document.querySelector('.deleteCard');
    deleteCardBtn.href = `./delete_card/${cardId}/`;
}

prevSlide.addEventListener('click', () => {
    const cardIds = Array.from(document.querySelectorAll('.card')).map(card => card.getAttribute('data-id'));
    let currentCardIndex = parseInt(cardSlide.getAttribute('data-index'));
    if (currentCardIndex === 0) {
        currentCardIndex = cardIds.length - 1;
    }
    else currentCardIndex--;
    let cardId = cardIds[currentCardIndex];
    populateCardSlide(getCardDataById(cardId));
});

nextSlide.addEventListener('click', () => {
    const cardIds = Array.from(document.querySelectorAll('.card')).map(card => card.getAttribute('data-id'));
    let currentCardIndex = parseInt(cardSlide.getAttribute('data-index'));
    if (currentCardIndex === cardIds.length - 1) {
        currentCardIndex = 0;
    }
    else currentCardIndex++;
    let cardId = cardIds[currentCardIndex];
    populateCardSlide(getCardDataById(cardId));
    const deleteCardBtn = document.querySelector('.deleteCard');
    deleteCardBtn.href = `../../delete_card/${cardId}/`;
});

let cards = document.querySelectorAll('.card');
let i = 0;
cards.forEach(card => {
    card.setAttribute('data-index', i++);
    card.addEventListener('click', () => {
        openCardSlides();
        populateCardSlide(getCardDataByElement(card));
    });
}); 

createDeckBtn.addEventListener('click', openDeckModal);

saveDeck.addEventListener('click', closeDeckModal);

cardSlides.addEventListener('click', (e) => {
    if (e.target === cardSlides) {
        closeCardSlides();
    }
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

addFlipping();
addCardBtn.addEventListener('click', openCardModal);

