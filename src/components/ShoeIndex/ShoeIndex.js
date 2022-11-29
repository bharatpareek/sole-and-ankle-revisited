import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, MEDIAQUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndexBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileBreadcrumb>
            <ShoeIndexBreadcrumbs/>
          </MobileBreadcrumb>
          <Title>Running</Title>
          <SelectWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
          <DesktopBreadcrumb>
            <ShoeIndexBreadcrumbs/>
          </DesktopBreadcrumb>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${MEDIAQUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadcrumb = styled.div`
  @media ${MEDIAQUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const MobileBreadcrumb = styled.div`
  display: none;
  @media ${MEDIAQUERIES.tabletAndSmaller} {
    display: revert;
    flex: 1 1 100%;
  }
`;

const SelectWrapper = styled.div`
  @media ${MEDIAQUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;
