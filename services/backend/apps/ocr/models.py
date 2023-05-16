from typing import Optional

import hashid_field
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models

from apps.content import models as content_models
from common.storages import UniqueFilePathGenerator

User = get_user_model()

# Create your models here.


class BrowseHistory(models.Model):
    id = hashid_field.HashidAutoField(primary_key=True)
    base64_data = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
