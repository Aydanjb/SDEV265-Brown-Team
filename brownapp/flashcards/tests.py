from django.test import TestCase
from .models import Deck, Card

# Create your tests here.

# Model tests
class DeckTestCase(TestCase):
    def setUp(self):
        Deck.objects.create(name="Test Deck")

    def test_deck_name(self):
        deck = Deck.objects.get(name="Test Deck")
        self.assertEqual(deck.name, "Test Deck")

class CardTestCase(TestCase):
    def setUp(self):
        deck = Deck.objects.create(name="Test Deck")
        Card.objects.create(front="Test Front", back="Test Back", deck=deck)

    def test_card_front(self):
        card = Card.objects.get(front="Test Front")
        self.assertEqual(card.front, "Test Front")
    
    def test_card_back(self):
        card = Card.objects.get(back="Test Back")
        self.assertEqual(card.back, "Test Back")
    
    def test_card_deck(self):
        deck = Deck.objects.get(name="Test Deck")
        card = Card.objects.get(front="Test Front")
        self.assertEqual(card.deck, deck)

# View tests
class ViewTest(TestCase):
    def test_home(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        
    def test_deck(self):
        deck = Deck.objects.create(name="Test Deck")
        response = self.client.get(f"/deck/1/")
        self.assertEqual(response.status_code, 200)
        
    def test_create_deck(self):
        response = self.client.post("/create_deck/", {"name": "Test"})
        self.assertEqual(response.status_code, 302)
        
    def test_create_card(self):
        deck = Deck.objects.create(name="Test")
        response = self.client.post(f"/create_card/{deck.id}/", {"front": "Test Front", "back": "Test Back"})
        self.assertEqual(response.status_code, 302)