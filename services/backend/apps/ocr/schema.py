import graphene
from django.shortcuts import get_object_or_404
from graphql_relay import to_global_id

from common.graphql import mutations
from graphene import relay
from graphene_django import DjangoObjectType

from . import models, serializers


# BrowseHistory ---------------------------------------
class BrowseHistoryItemType(DjangoObjectType):
    actual_id = graphene.ID(
        description="Actual primary key of a Browse History item")

    class Meta:
        model = models.BrowseHistory
        interfaces = (relay.Node,)

    def resolve_actual_id(self, info):
        return self.id


class BrowseHistoryItemConnection(graphene.Connection):
    class Meta:
        node = BrowseHistoryItemType


class CreateBrowseHistoryItemMutation(mutations.CreateModelMutation):
    class Meta:
        serializer_class = serializers.BrowserHistorySerializer
        edge_class = BrowseHistoryItemConnection.Edge


class UpdateBrowseHistoryItemMutation(mutations.UpdateModelMutation):
    class Meta:
        serializer_class = serializers.BrowserHistorySerializer
        edge_class = BrowseHistoryItemConnection.Edge


class DeleteBrowseHistoryItemMutation(mutations.DeleteModelMutation):
    class Meta:
        model = models.BrowseHistory


class Query(graphene.ObjectType):
    browse_history_item = graphene.relay.Node.Field(BrowseHistoryItemType)
    browse_history_items = graphene.relay.ConnectionField(
        BrowseHistoryItemConnection)

    def resolve_browse_history_items(root, info, **kwargs):
        return models.BrowseHistory.objects.all()


class Mutation(graphene.ObjectType):
    create_browse_history_item = CreateBrowseHistoryItemMutation.Field()
    update_browse_history_item = UpdateBrowseHistoryItemMutation.Field()
    delete_browse_history_item = DeleteBrowseHistoryItemMutation.Field()
