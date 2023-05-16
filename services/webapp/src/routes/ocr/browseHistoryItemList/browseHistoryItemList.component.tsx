import { Suspense, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';
import { useQueryLoader } from 'react-relay';
import { Container, Heading } from './browseHistoryItemList.styles';
import { BrowseHistoryItemListContent } from './browseHistoryItemListContent';
import { browseHistoryItemListQuery } from './__generated__/browseHistoryItemListQuery.graphql';

export const BrowseHistory = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [listQueryRef, loadListQuery] = useQueryLoader<browseHistoryItemListQuery>(
    graphql`
      query browseHistoryItemListQuery {
        browseHistoryItems(first: 100) @connection(key: "browseHistoryItemList_browseHistoryItems") {
          edges {
            node {
              id
              base64Data
              createdAt
              actualId
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    loadListQuery({});
  }, [loadListQuery]);

  console.log(listQueryRef);
  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'History',
          id: 'History / page title',
        })}
      />
      <Heading>History</Heading>
      {listQueryRef && (
        <Suspense fallback={<span>Loading...</span>}>
          <BrowseHistoryItemListContent queryRef={listQueryRef} />
        </Suspense>
      )}
    </Container>
  );
};
