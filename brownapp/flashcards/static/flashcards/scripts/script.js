// DOM Element Variables
const createDeckBtn = document.getElementById('createDeck');
const saveDeck = document.getElementById('saveDeck');
const editDeckBtn = document.querySelectorAll('.editDeck');
const editDeckModal = document.getElementById('editDeckModal');
const saveEditDeck = document.getElementById('saveEditDeck');
const deckModal = document.getElementById('deckModal');
const editDeckForm = document.getElementById('editDeckForm');

// Opens the edit deck modal
function openEditDeck() {
    editDeckModal.style.display = 'block';
}

// Hides the edit deck modal
function closeEditDeck() {
    editDeckModal.style.display = 'none';
}

// Opens the add deck modal
function openDeckModal() {
    deckModal.style.display = 'block';
}

// Hides the add deck modal
function closeDeckModal() {
    deckModal.style.display = 'none';
}

// Adds event listeners to open and hide the add deck modal
createDeckBtn.addEventListener('click', openDeckModal);
saveDeck.addEventListener('click', closeDeckModal);

// Adds event listeners to open and hide the edit deck modal
editDeckBtn.forEach(element => {
    element.addEventListener('click', openEditDeck);
    element.addEventListener('click', (e) => {
        // Get the id of the deck to edit
        const id = e.target.getAttribute('data-id');
        // Set the form action to the edit deck url
        editDeckForm.action = `edit_deck/${id}`;
    });
});

// Adds event listeners to hide the edit deck modal
saveEditDeck.addEventListener('click', closeEditDeck);

// Adds event listeners to hide the edit deck modal when clicking outside of it
editDeckModal.addEventListener('click', (e) => {
    if (e.target === editDeckModal) {
        closeEditDeck();
    }
});

// Adds event listeners to hide the add deck modal when clicking outside of it
deckModal.addEventListener('click', (e) => {
    if (e.target === deckModal) {
        closeDeckModal();
    }
});