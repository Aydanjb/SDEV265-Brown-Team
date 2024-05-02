const createDeckBtn = document.getElementById('createDeck');
const saveDeck = document.getElementById('saveDeck');
const editDeckBtn = document.querySelector('.editDeck');
const editDeckModal = document.getElementById('editDeckModal');
const saveEditDeck = document.getElementById('saveEditDeck');
const deckModal = document.getElementById('deckModal');

function openEditDeck() {
    editDeckModal.style.display = 'block';
}

function closeEditDeck() {
    editDeckModal.style.display = 'none';
}

function openDeckModal() {
    deckModal.style.display = 'block';
}

function closeDeckModal() {
    deckModal.style.display = 'none';
}

createDeckBtn.addEventListener('click', openDeckModal);
saveDeck.addEventListener('click', closeDeckModal);
editDeckBtn.addEventListener('click', openEditDeck);

editDeckModal.addEventListener('click', (e) => {
    if (e.target === editDeckModal) {
        closeEditDeck();
    }
});

deckModal.addEventListener('click', (e) => {
    if (e.target === deckModal) {
        closeDeckModal();
    }
});