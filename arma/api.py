from arma.models import Lead, PatchNote
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer, PatchNoteSerializer


class LeadViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.arma.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class PatchNoteViewSet(viewsets.ModelViewSet):

    serializer_class = PatchNoteSerializer

    queryset = PatchNote.objects.all()
