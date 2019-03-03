import React from 'react';
import styled from 'styled-components';

import Button, { ButtonIcon } from './Button';
import Disponibility from './Disponibility';
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
      <Disponibility text="Actuellement disponible pour de courtes missions" />
      <Button onClick={props.showContactForm}>
        <ButtonIcon className="fas fa-envelope" />
        Me contacter
      </Button>
      <Button light href="https://github.com/jverneaut">
        <ButtonIcon className="fab fa-github" />
        Voir mon github
      </Button>
    </HeroContent>
    <Portrait />
  </HeroContainer>
);

export default Hero;
