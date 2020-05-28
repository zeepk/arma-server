from rest_framework import routers
from .api import LeadViewSet, PatchNoteViewSet, StoreItemViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/patchnotes', PatchNoteViewSet, 'patchnotes')
router.register('api/storeitems', StoreItemViewSet, 'store items')

urlpatterns = router.urls
