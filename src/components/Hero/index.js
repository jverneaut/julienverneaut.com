import React from 'react';
import styled from 'styled-components';

import Portrait from './Portrait';

const HeroContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 144px 24px;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    padding: 32px 24px;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    padding: 32px 24px;
    align-items: flex-start;
  }
`;

const HeroContent = styled.div`
  flex: 2;
  margin-right: 16px;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 1.2;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-top: 32px;
  }
`;

const Description = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

const DescritpionParagraph = styled.p`
  flex: 1;
  margin-right: 16px;
  line-height: 1.5;
  opacity: 0.7;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    margin-right: 0;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => props.light ? 'white' : props.theme.colors.primary};
  color: ${props => props.light ? props.theme.colors.dark : 'white'};
  padding: 16px 24px;
  margin-right: 16px;
  display: inline-block;
  border-radius: 4px;
  margin-top: 32px;
  box-shadow: 0 4px 16px rgba(10, 29, 66, 0.08);
  transition: 0.3s all;
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: ${props => props.light ? 'white' : props.theme.colors.primary};
    background-color: ${props => props.light ? props.theme.colors.dark : 'white'};
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    &:last-of-type {
      margin-top: 16px;
    }
  }
`;

const ContactBtnIcon = styled.i`
  margin-right: 16px;
  font-size: 16px;
`;

const Hero = (props) => (
  <HeroContainer>
    <HeroContent>
      <Title>Construisons de belles choses ensemble</Title>
      <Description>
        <DescritpionParagraph>
          Mon nom est Julien Verneaut. Je crée des sites internet ainsi que des jeux et applications pour smartphone.
        </DescritpionParagraph>
        <DescritpionParagraph>
          Du design à la programmation, je travaille avec vous pour réaliser vos projets les plus fous.
          {" "}<span role="img" aria-label="étincelles">✨</span>
        </DescritpionParagraph>
      </Description>
      <ContactBtn onClick={props.showContactForm}>
        <ContactBtnIcon className="fas fa-envelope" />
        Me contacter
        </ContactBtn>
      <ContactBtn light href="https://github.com/jverneaut" target="_blank">
        <ContactBtnIcon className="fab fa-github" />
        Voir mon github
        </ContactBtn>
    </HeroContent>
    <Portrait />
  </HeroContainer>
)

export default Hero;
