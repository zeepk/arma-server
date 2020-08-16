from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.template.defaultfilters import slugify


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
    author = models.CharField(max_length=100, default='', blank=True)
    content = RichTextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True, blank=True)
    slug = models.SlugField(max_length=200, default=(slugify(name) + slugify(version)))

    def __str__(self):
        return self.name + ' ' + self.version

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name) + slugify(self.version)
        super(PatchNote, self).save(*args, **kwargs) 


class StoreItem(models.Model):
    header = models.CharField(max_length=100)
    subheader = models.CharField(blank=True, max_length=200)
    details = RichTextField(blank=True, default='')
    link = models.CharField(blank=True, max_length=200)
    price = models.CharField(blank=True, max_length=50)
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField(default=0, null=False)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.header
