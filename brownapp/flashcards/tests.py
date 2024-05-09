from django.test import TestCase
from .models import Deck, Card
from django.contrib.auth.models import User
from django.test import Client
# Create your tests here.

# Model tests
class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create_user(username="testuser", password="testpassword")

    def test_user_username(self):
        user = User.objects.get(username="testuser")
        self.assertEqual(user.username, "testuser")

class DeckTestCase(TestCase):
    def setUp(self):
        user = User.objects.create_user(username="testuser", password="testpassword")
        Deck.objects.create(name="Test Deck", user=user)

    def test_deck_name(self):
        deck = Deck.objects.get(name="Test Deck")
        self.assertEqual(deck.name, "Test Deck")

class CardTestCase(TestCase):
    def setUp(self):
        user = User.objects.create_user(username="testuser", password="testpassword")
        deck = Deck.objects.create(name="Test Deck", user=user)
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
    def setUp(self):
        self.client = Client()
        user = User.objects.create(username="testuser")
        user.set_password("testpassword")
        user.save()

        self.logged_in = self.client.login(username="testuser", password="testpassword")
        

    def login_test(self):
        self.assertTrue(self.logged_in)

    # BROKEN CODE
    '''
    def test_home(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        
    def test_deck(self):
        deck = Deck.objects.create(name="Test Deck", user = User.objects.get(username="testuser"))
        response = self.client.get(f"/deck/{deck.id}/")
        self.assertEqual(response.status_code, 200)
        
    def test_create_deck(self):
        response = self.client.post("/create_deck/", {"name": "Test", "user": 1})
        self.assertEqual(response.status_code, 302)
        
    def test_create_card(self):
        self.client.login(username=self.test_username, password=self.test_password)
        deck = Deck.objects.create(name="Test", user=self.test_user)
        response = self.client.post(f"/create_card/{deck.id}/", {"front": "Test Front", "back": "Test Back"})
        self.assertEqual(response.status_code, 302)
        self.assertTrue(Card.objects.filter(front="Test Front", back="Test Back").exists())
'''