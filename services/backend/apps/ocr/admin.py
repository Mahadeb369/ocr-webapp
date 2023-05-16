from django.contrib import admin

from . import models
# Register your models here.


@admin.register(models.BrowseHistory)
class BrowserHistoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'base64_data', 'created_by', 'created_at')
