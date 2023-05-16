from rest_framework import serializers
from . import models
from hashid_field import rest as hidrest, Hashid


class BrowserHistorySerializer(serializers.ModelSerializer):
    id = hidrest.HashidSerializerCharField(
        source_field="users.User.id", read_only=True)
    created_by = serializers.HiddenField(
        default=serializers.CurrentUserDefault())

    class Meta:
        model = models.BrowseHistory
        fields = ('id', 'base64_data', 'created_by', 'created_at')

    def create(self, validated_data):
        return models.BrowseHistory.objects.create(**validated_data)
