# Generated by Django 5.0.4 on 2024-05-02 03:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('flashcards', '0006_deck_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deck',
            name='user',
        ),
    ]
