// DOM Element Variables
const createDeckBtn = document.getElementById('createDeck');
const addCardBtn = document.querySelector('.addCard');
const saveDeck = document.getElementById('saveDeck');
const cardModal = document.getElementById('cardModal');
const cardSlides = document.getElementById('cardSlides');
const cardSlide = document.getElementById('cardSlide');
const nextSlide = document.getElementById('right-arrow');
const prevSlide = document.getElementById('left-arrow');
const editModal = document.getElementById('editModal');
const editCardBtn = document.querySelector('.editCard');
const editDeckBtn = document.querySelectorAll('.editDeck');
const editDeckModal = document.getElementById('editDeckModal');
const saveEditDeck = document.getElementById('saveEditDeck');
const deckModal = document.getElementById('deckModal');


// Opens or hides the various modals 
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

function openDeckModal() {
    deckModal.style.display = 'block';
}

function closeDeckModal() {
    deckModal.style.display = 'none';
}

function openEditModal() {
    editModal.style.display = 'block';
}

function closeEditModal() {
    editModal.style.display = 'none';
}

function openEditDeck() {
    editDeckModal.style.display = 'block';
}

function closeEditDeck() {
    editDeckModal.style.display = 'none';
}

// Adds the flipping effect to the card
function addFlipping() {
    cardSlide.addEventListener('click', () => {
        cardSlide.classList.toggle('flipped');
    });
}

// Sets the form action to the edit card url
function setFormAction() {
    const cardId = cardSlide.getAttribute('data-id');
    const form = document.getElementById('editForm');
    form.action = `./edit_card/${cardId}/`;
}

// Gets the card data from the card element
function getCardDataByElement(element) {
    const front = element.querySelector('.front').textContent;
    const back = element.querySelector('.back').textContent;
    const cardId = element.getAttribute('data-id');
    const cardIndex = element.getAttribute('data-index');
    cardData = [front, back, cardId, cardIndex];
    return cardData;
}

// Gets the card data from the card id
function getCardDataById(id) {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    const front = card.querySelector('.front').textContent;
    const back = card.querySelector('.back').textContent;
    const cardId = card.getAttribute('data-id');
    const cardIndex = card.getAttribute('data-index');
    cardData = [front, back, cardId, cardIndex];
    return cardData;
}

// Populates the card slide with the card data
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

// Adds event listeners to the card slide arrows
prevSlide.addEventListener('click', () => {
    // Creates an array of all card ids
    const cardIds = Array.from(document.querySelectorAll('.card')).map(card => card.getAttribute('data-id'));

    // Gets the current card index
    let currentCardIndex = parseInt(cardSlide.getAttribute('data-index'));

    // If the current card is the first card, set the current card to the last card
    if (currentCardIndex === 0) {
        currentCardIndex = cardIds.length - 1;
    }
    // Otherwise, decrement the current card index
    else currentCardIndex--;

    // Get the card id of the current card
    let cardId = cardIds[currentCardIndex];

    // Populate the card slide with the current card data
    populateCardSlide(getCardDataById(cardId));
});

nextSlide.addEventListener('click', () => {
    // Creates an array of all card ids
    const cardIds = Array.from(document.querySelectorAll('.card')).map(card => card.getAttribute('data-id'));

    // Gets the current card index
    let currentCardIndex = parseInt(cardSlide.getAttribute('data-index'));

    // If the current card is the last card, set the current card to the first card
    if (currentCardIndex === cardIds.length - 1) {
        currentCardIndex = 0;
    }
    // Otherwise, increment the current card index
    else currentCardIndex++;
    
    // Get the card id of the current card
    let cardId = cardIds[currentCardIndex];

    // Populate the card slide with the current card data
    populateCardSlide(getCardDataById(cardId));

    // Sets the href of the delete card button
    const deleteCardBtn = document.querySelector('.deleteCard');
    deleteCardBtn.href = `../../delete_card/${cardId}/`;
});

// Adds an index to each card and adds event listeners to each card to open the card slideshow
let cards = document.querySelectorAll('.card');
let i = 0;
cards.forEach(card => {
    card.setAttribute('data-index', i++);
    card.addEventListener('click', () => {
        openCardSlides();
        populateCardSlide(getCardDataByElement(card));
    });
}); 

// Adds event listeners to the add, edit, and save card/deck buttons
editCardBtn.addEventListener('click', setFormAction);
editCardBtn.addEventListener('click', openEditModal);
addCardBtn.addEventListener('click', openCardModal);
saveDeck.addEventListener('click', closeDeckModal);
createDeckBtn.addEventListener('click', openDeckModal);
editDeckBtn.forEach(element => {
    element.addEventListener('click', openEditDeck);
    element.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        editDeckForm.action = `edit_deck/${id}`;
    });
});

// Adds event listeners to hide the various modals
editDeckModal.addEventListener('click', (e) => {
    if (e.target === editDeckModal) {
        closeEditDeck();
    }
});

editModal.addEventListener('click', (e) => {
    if (e.target === editModal) {
        closeEditModal();
    }    
});

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

// Adds the flipping effect to the card
addFlipping();