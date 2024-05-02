from django.shortcuts import redirect, render
from .models import Deck, Card
from .forms import deck_form, card_form

# Create your views here.
def home(response):
    decks = Deck.objects.all()
    f_deck = deck_form()
    f_card = card_form()

    context = {"f_deck": f_deck, "f_card": f_card, "decks": decks}

    return render(response, "flashcards/base.html", context)

def deck(response, deck_id):
    decks = Deck.objects.all()
    deck = Deck.objects.get(id=deck_id)
    cards = Card.objects.filter(deck=deck)
    f_deck = deck_form()
    f_card = card_form()

    context = {"f_deck": f_deck, "f_card": f_card, "decks": decks, "deck": deck, "cards": cards}

    return render(response, "flashcards/deck.html", context)

def create_deck(response, deck_id=None):
    if response.method == "POST":
        f_deck = deck_form(response.POST)
        if f_deck.is_valid():
            deck_name = f_deck.cleaned_data["name"]
            new_deck = Deck(name=deck_name)
            new_deck.save()
        if deck_id:
            return redirect("/deck/" + str(deck_id) + "/")
        return redirect("/")
    
def delete_deck(response, deck_id, id=None):
    deck = Deck.objects.get(id=deck_id)
    deck.delete()
    return redirect("/")

def edit_deck(response, deck_id, id=None):
    if response.method == "POST":
        deck = Deck.objects.get(id=deck_id)
        f_deck = deck_form(response.POST, instance=deck)
        if f_deck.is_valid():
            f_deck.save()
        if id:
            return redirect("/deck/" + str(id) + "/")
        return redirect("/")
        
def create_card(response, deck_id):
    if response.method == "POST":
        f_card = card_form(response.POST)
        if f_card.is_valid():
            front = f_card.cleaned_data["front"]
            back = f_card.cleaned_data["back"]
            deck = Deck.objects.get(id=deck_id)
            new_card = Card(front=front, back=back, deck=deck)
            new_card.save()
        return redirect("/deck/" + str(deck_id) + "/")
    
def delete_card(response, deck_id, card_id):
    card = Card.objects.get(id=card_id)
    deck_id = card.deck.id
    card.delete()
    return redirect("/deck/" + str(deck_id) + "/")

def edit_card(response, deck_id, card_id):
    if response.method == "POST":
        card = Card.objects.get(id=card_id)
        f_card = card_form(response.POST, instance=card)
        if f_card.is_valid():
            f_card.save()
        return redirect("/deck/" + str(deck_id) + "/")