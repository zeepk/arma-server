from rest_framework import serializers
from arma.models import Lead, PatchNote


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

class PatchNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatchNote
        fields = '__all__'