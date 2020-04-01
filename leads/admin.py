from django.contrib import admin
from .models import (PatchNote)

# Register your models here.
class PatchNoteAdmin(admin.ModelAdmin):
    field = '__all__'

admin.site.register(PatchNote, PatchNoteAdmin)