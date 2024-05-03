const createDeckBtn = document.getElementById('createDeck');
const saveDeck = document.getElementById('saveDeck');
const editDeckBtn = document.querySelectorAll('.editDeck');
const editDeckModal = document.getElementById('editDeckModal');
const saveEditDeck = document.getElementById('saveEditDeck');
const deckModal = document.getElementById('deckModal');
const editDeckForm = document.getElementById('editDeckForm');

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
editDeckBtn.forEach(element => {
    element.addEventListener('click', openEditDeck);
    element.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        editDeckForm.action = `edit_deck/${id}`;
    });
});
saveEditDeck.addEventListener('click', closeEditDeck);

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