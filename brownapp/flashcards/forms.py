from django import forms
from .models import Deck, Card
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class deck_form(forms.ModelForm):
    class Meta:
        model = Deck
        fields = ["name"]

class card_form(forms.ModelForm):
    class Meta:
        model = Card
        exclude = ["deck"]

class CustomUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']