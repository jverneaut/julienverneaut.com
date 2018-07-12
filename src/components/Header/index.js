import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0 24px;
  display: flex;
`;

const HeaderContent = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 2;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
  }
`;

const Description = styled.div`
  opacity: 0.7;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    display: none;
  }
`;

const LogoGroup = styled.div``;

const Tabs = styled.ul`
  position: relative;
  &::before {
    left: -32px;
    position: absolute;
    content: '—';
    display: block;
    color: ${props => props.theme.colors.dark};
    opacity: 0.7;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    margin-top: 16px;
    &::before {
      display: none;
    }
  }
`;

const Tab = styled.li`
  display: inline-block;
  margin-right: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const TabLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
  opacity: 0.7;
  transition: 0.3s all;
  &:hover {
    opacity: 1;
  }
`;

const Spacer = styled.div`
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoGroup>
        <Logo>
          Julien Verneaut
        </Logo>
        <Description>
          développeur
        </Description>
      </LogoGroup>
      <Tabs>
        <Tab>
          <TabLink href="https://medium.com/@jverneaut" target="_blank">
            Blog
          </TabLink>
        </Tab>
        <Tab>
          <TabLink href="https://www.petitbouquin.com" target="_blank">
            Livres
          </TabLink>
        </Tab>
        <Tab>
          <TabLink>
            A propos
          </TabLink>
        </Tab>
      </Tabs>
    </HeaderContent>
    <Spacer />
  </HeaderContainer>
);

export default Header;
