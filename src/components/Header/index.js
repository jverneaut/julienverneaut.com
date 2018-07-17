import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 24px;
  display: flex;
`;

const HeaderContent = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 2;
  line-height: 1.3;
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
  cursor: pointer;
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

const Emoji = styled.span.attrs({
  role: 'img',
})`
  font-size: 0.5em;
  vertical-align: top;
`;

const Header = (props) => (
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
          <TabLink
            href="https://github.com/jverneaut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink
            href="https://fr.linkedin.com/in/julien-verneaut-6b56b8122"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink onClick={e => { e.preventDefault(); props.showContactForm() }}>
            <i className="fas fa-envelope" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink
            href="https://www.petitbouquin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Livres
          </TabLink>
        </Tab>
        <Tab>
          <TabLink
            href="https://medium.com/@jverneaut"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog{" "}
            {// eslint-disable-next-line
            }<Emoji aria-label="USA flag">🇺🇸</Emoji>
          </TabLink>
        </Tab>
      </Tabs>
    </HeaderContent>
    <Spacer />
  </HeaderContainer>
);

export default Header;
