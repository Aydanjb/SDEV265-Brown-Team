from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("deck/<int:deck_id>/", views.deck, name="deck"),
    path("create_deck/", views.create_deck, name="create_deck"),
    path("deck/<int:deck_id>/create_deck/", views.create_deck, name="create_deck"),
    path("create_card/<int:deck_id>/", views.create_card, name="create_card"),
    path("deck/<int:deck_id>/delete_card/<int:card_id>/", views.delete_card, name="delete_card"),
]