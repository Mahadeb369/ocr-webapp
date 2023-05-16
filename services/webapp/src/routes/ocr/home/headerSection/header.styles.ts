import styled from 'styled-components';
import { Breakpoint, media } from '../../../../theme/media';

export const Container = styled.section`
  max-width: 75rem;
  margin: auto;
`;

export const Image = styled.img`
  border-radius: 5px;
  flex: 20%;
  ${media(Breakpoint.MOBILE)`
    width: 80vw
  `};
  ${media(Breakpoint.TABLET)`
    width: 100%;
  `};
`;

export const HeadingDiv = styled.div`
  margin: -43px 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  ${media(Breakpoint.MOBILE)`
    flex-direction: column;
  `};
  ${media(Breakpoint.TABLET)`
    flex-direction: row
  `};
`;

export const TextDiv = styled.div`
  flex: 20%;
`;

export const H1 = styled.p`
  font-size: 70px;
  font-weight: 700;
`;

export const P = styled.p`
  font-size: 10px;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  margin-left: 30px;
  margin-right: 30px;
`;
