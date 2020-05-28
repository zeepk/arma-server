from rest_framework import routers
from .api import LeadViewSet, PatchNoteViewSet

router = routers.DefaultRouter()
router.register('api/arma', LeadViewSet, 'arma')
router.register('api/patchnotes', PatchNoteViewSet, 'patchnotes')

urlpatterns = router.urls