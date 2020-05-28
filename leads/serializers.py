from rest_framework import serializers
from leads.models import Lead, PatchNote, StoreItem


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'


class PatchNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatchNote
        fields = '__all__'


class StoreItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreItem
        fields = '__all__'
