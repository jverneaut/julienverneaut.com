import React from 'react';
import styled from 'styled-components';

import Menu, { Tab, TabLink } from './Menu';

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

const LogoGroup = styled.div``;

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

const Spacer = styled.div`
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex: 0;
  }
`;

const Header = (props) => (
  <HeaderContainer>
    <HeaderContent>
      <LogoGroup>
        <Logo>
          Julien Verneaut
      </Logo>
        <Description>
          Développeur web à Strasbourg
      </Description>
      </LogoGroup>
      <Menu>
        <Tab>
          <TabLink href="https://github.com/jverneaut">
            <i className="fab fa-github" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink href="https://fr.linkedin.com/in/julien-verneaut">
            <i className="fab fa-linkedin" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink onClick={e => { e.preventDefault(); props.showContactForm() }}>
            <i className="fas fa-envelope" />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink href="https://blog.julienverneaut.com">
            Blog
          </TabLink>
        </Tab>
      </Menu>
    </HeaderContent>
    <Spacer />
  </HeaderContainer>
);

export default Header;
