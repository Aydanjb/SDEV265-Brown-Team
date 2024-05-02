from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Deck(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='1')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Card(models.Model):
    front = models.CharField(max_length=100)
    back = models.CharField(max_length=100)
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)

    def get_front(self):
        return self.front
    
    def get_back(self):
        return self.back
    
    def get_deck(self):
        return self.deck

    def __str__(self):
        return f"{self.front}:{self.back}"