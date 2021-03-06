import * as React from 'react';
import styled from 'styled-components';
import Color from '../lib/color';
import Wrapper from '../components/wrapper';

const FlexContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SideContent = styled(Wrapper)`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 35vw;
    border-bottom: 1px solid;
    border-bottom-color: ${Color.white};
  }
`;

const MainContent = styled.div`
  width: 100%
  padding: 20px;
  background-color: ${Color.white};
  @media screen and (min-width: 768px) {
    flex: 1;
    order: 2;
    width: 65vw;
  }
`;

type Props = {
  side: React.ReactNode;
  main: React.ReactNode;
};

const MainContainer: React.FC<Props> = ({ side, main }) => (
  <FlexContainer>
    <SideContent>{side}</SideContent>
    <MainContent>{main}</MainContent>
  </FlexContainer>
);

export default MainContainer;
