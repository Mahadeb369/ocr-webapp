import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import browseHistoryItemListQueryGraphql, {
  browseHistoryItemListQuery,
} from '../__generated__/browseHistoryItemListQuery.graphql';
import { Container } from '../browseHistoryItemList.styles';
import { BrowseHistoryItemListItem } from '../browseHistoryItemListItem';

export type browseHistoryItemListContenttProps = {
  queryRef: PreloadedQuery<browseHistoryItemListQuery>;
};

export const BrowseHistoryItemListContent = ({ queryRef }: browseHistoryItemListContenttProps) => {
  const { browseHistoryItems } = usePreloadedQuery(browseHistoryItemListQueryGraphql, queryRef);
  const edgesArray = browseHistoryItems?.edges;

  return (
    <Container>
      {
        mapConnection((item) => (
          <BrowseHistoryItemListItem key={item?.id} item={item} />
        ), browseHistoryItems)
      }
    </Container>
  );
};
