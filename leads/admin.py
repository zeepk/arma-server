from django.contrib import admin
from .models import (PatchNote, StoreItem)


class PatchNoteAdmin(admin.ModelAdmin):
    field = '__all__'


class StoreItemAdmin(admin.ModelAdmin):
    field = '__all__'


admin.site.register(StoreItem, StoreItemAdmin)
admin.site.register(PatchNote, PatchNoteAdmin)
