from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField


class Lead(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    owner = models.ForeignKey(
        User, related_name="arma", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class PatchNote(models.Model):
    name = models.CharField(max_length=100)
    version = models.CharField(max_length=20, blank=True)
    content = RichTextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + ' ' + self.version


