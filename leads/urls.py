from rest_framework import routers
from .api import LeadViewSet, PatchNoteViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/patchnotes', PatchNoteViewSet, 'patchnotes')

urlpatterns = router.urls