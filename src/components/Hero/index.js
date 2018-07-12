import React from 'react';
import styled from 'styled-components';

import Portrait from './Portrait';

const HeroContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 160px 24px;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  flex: 2;
  margin-right: 16px;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Description = styled.div`
  display: flex;
`;

const DescritpionParagraph = styled.p`
  flex: 1;
  margin-right: 16px;
  line-height: 1.5;
  opacity: 0.7;
`;


const ContactBtn = styled.a`
  text-decoration: none;
  background-color: ${props => props.light ? 'white' : props.theme.colors.primary};
  color: ${props => props.light ? props.theme.colors.dark : 'white'};
  padding: 16px 24px;
  margin-right: 16px;
  float: left;
  border-radius: 4px;
  margin-top: 32px;
  box-shadow: 0 4px 16px rgba(10, 29, 66, 0.12);
  transition: 0.3s all;
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: ${props => props.light ? 'white' : props.theme.colors.primary};
    background-color: ${props => props.light ? props.theme.colors.dark : 'white'};
  }
`;

const ContactBtnIcon = styled.i`
  margin-right: 16px;
  font-size: 16px;
`;

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <Title>Construisons de belles choses ensemble</Title>
      <Description>
        <DescritpionParagraph>
          Je m'appelle Julien Verneaut et je suis un développeur basé à Strasbourg spécialisé dans le web.
        </DescritpionParagraph>
        <DescritpionParagraph>
          Je me situe entre le design, le développement et le marketing pour porter votre projet vers l'avenir.
        </DescritpionParagraph>
      </Description>
      <ContactBtn href="/">
        <ContactBtnIcon className="fas fa-envelope"></ContactBtnIcon>
        Me contacter
      </ContactBtn>
      <ContactBtn light href="https://github.com/jverneaut">
        <ContactBtnIcon className="fab fa-github"></ContactBtnIcon>
        Voir mon github
      </ContactBtn>
    </HeroContent>
    <Portrait />
  </HeroContainer>
);

export default Hero;
