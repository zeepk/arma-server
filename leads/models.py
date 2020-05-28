from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField


class Lead(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class PatchNote(models.Model):
    name = models.CharField(max_length=100)
    version = models.CharField(max_length=20, blank=True)
    content = RichTextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + ' ' + self.version


class StoreItem(models.Model):
    header = models.CharField(max_length=100)
    subheader = models.CharField(max_length=100)
    price = models.DecimalField(blank=True, max_digits=6, decimal_places=2)
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.header

