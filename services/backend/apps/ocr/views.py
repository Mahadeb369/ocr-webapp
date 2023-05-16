from rest_framework import viewsets

# from common.acl import policies
from common.acl import policies
from . import models, serializers

# Create your views here.


class BrowserHistoryViewSet(viewsets.ModelViewSet):
    queryset = models.BrowseHistory.all()
    serializer_class = serializers.BrowserHistorySerializer
    permission_classes = (policies.IsAuthenticatedFullAccess,)
