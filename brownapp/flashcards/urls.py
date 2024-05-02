from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("flashcards/deck/<int:deck_id>/", views.deck, name="deck"),
    path("flashcards/create_deck/", views.create_deck, name="create_deck"),
    path("flashcards/deck/<int:deck_id>/create_deck/", views.create_deck, name="create_deck"),
    path("flashcards/create_card/<int:deck_id>/", views.create_card, name="create_card"),
    path("flashcards/deck/<int:deck_id>/delete_card/<int:card_id>/", views.delete_card, name="delete_card"),
    path("flashcards/deck/<int:deck_id>/edit_card/<int:card_id>/", views.edit_card, name="edit_card"),
    path("flashcards/delete_deck/<int:deck_id>/", views.delete_deck, name="delete_deck"),
    path("flashcards/deck/<int:id>/delete_deck/<int:deck_id>", views.delete_deck, name="delete_deck"),
    path("flashcards/edit_deck/<int:deck_id>", views.edit_deck, name="edit_deck"),
    path("flashcards/deck/<int:id>/edit_deck/<int:deck_id>", views.edit_deck, name="edit_deck"),
    path("register/", views.register, name="register"),
    path("flashcards/", views.flashcards, name="flashcards"),

]