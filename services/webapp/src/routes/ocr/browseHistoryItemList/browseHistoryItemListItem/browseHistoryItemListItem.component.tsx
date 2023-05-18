import React from 'react';
import useImage from 'use-image';
import { Image, Layer, Stage } from 'react-konva';
import { Canvas } from '../../canvas';
import { ImageSection } from './browseHistoryItemListItem.styles';

type BrowseHistoryItemListItemProps = {
  item: {
    readonly actualId: string | null;
    readonly base64Data: string | null;
    readonly createdAt: string;
    readonly id: string;
  };
};

export const BrowseHistoryItemListItem = ({ item }: BrowseHistoryItemListItemProps) => {
  const { actualId, base64Data, createdAt, id } = item;
  // const { base64Data } = node;
  const [img] = useImage(base64Data);

  console.log('hii', img);

  return <ImageSection>{base64Data && <Canvas base64Str={base64Data}></Canvas>}</ImageSection>;
};
