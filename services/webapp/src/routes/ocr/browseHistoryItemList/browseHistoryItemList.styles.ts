import styled from 'styled-components';
import { fullContentHeight, sizeUnits } from '../../../theme/size';
import { Breakpoint, media } from '../../../theme/media';
import { heading3 } from '../../../theme/typography';

export const Container = styled.div`
  ${fullContentHeight};
  padding-left: ${sizeUnits(4)};
  padding-right: ${sizeUnits(4)};
  padding-top: ${sizeUnits(3)};
  padding-bottom: ${sizeUnits(4)};
  ${media(Breakpoint.TABLET)` 
  `};
`;

export const Heading = styled.header`
  ${heading3}
`;
