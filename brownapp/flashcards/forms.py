from django import forms
from .models import Deck, Card

class deck_form(forms.ModelForm):
    class Meta:
        model = Deck
        fields = ["name"]

class card_form(forms.ModelForm):
    class Meta:
        model = Card
        exclude = ["deck"]