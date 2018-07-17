import React from 'react';
import styled from 'styled-components';

const ServicesBackground = styled.div`
  margin-top: 64px;
  background: white;
  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const ServicesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 24px;
  padding-top: 32px;
`;

const Service = styled.div`
  width: calc(50% - 24px);
  display: inline-block;
  margin-bottom: 32px;
  margin-right: 24px;
  vertical-align: top;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    width: calc(100% - 24px);
  }
`;

const ServiceTitle = styled.h3`
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  margin-top: 8px;
  line-height: 1.5;
  opacity: 0.7;
`;

const ServicesTitle = styled.h4`
  margin-bottom: 24px;
`;

const Services = () => (
  <ServicesBackground>
    <ServicesContainer>
      <ServicesTitle>Mes services :</ServicesTitle>
      <Service>
        <ServiceTitle>
          Développement web fullstack
        </ServiceTitle>
        <ServiceDescription>
          De Wordpress à NodeJs, je vous aide à choisir les technologies les plus adaptées à votre projet puis à développer une solution sur mesure pour votre entreprise.
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>
          Développement mobile
        </ServiceTitle>
        <ServiceDescription>
          Les utilisateurs de smartphones passent en moyenne 2h par jour sur leur mobile. Profitez de ma connaissances des frameworks Corona et React Native pour conquérir ce marché en pleine expansion.
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>
          UI/UX design
        </ServiceTitle>
        <ServiceDescription>
          Faire bonne impression à vos utilisateurs, c'est l'assurance d'une meilleure rétention.
        </ServiceDescription>
      </Service>
    </ServicesContainer>
  </ServicesBackground>
);

export default Services;
