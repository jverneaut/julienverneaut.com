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
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  margin-top: 8px;
  line-height: 1.5;
  color: ${props => props.theme.colors.body};

  strong {
    color: ${props => props.theme.colors.dark};
  }
`;

const ServicesTitle = styled.h4`
  margin-bottom: 24px;
`;

const Services = () => (
  <ServicesBackground>
    <ServicesContainer>
      <ServicesTitle>Mes services :</ServicesTitle>
      <Service>
        <ServiceTitle>Développement WordPress & WooCommerce</ServiceTitle>
        <ServiceDescription>
          Parce qu'il alimente plus de 35% du web, WordPress est la solution pragmatique pour la
          création de sites web stables et évolutifs.
        </ServiceDescription>
        <ServiceDescription>
          Ce service inclut le <strong>développement de thèmes et de plugins</strong> dans les
          règles de l'art, la maintenance ainsi que le déploiement de votre projet sur une
          infrastructure de type cloud selon vos besoins.
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>Création d'applications web interactives</ServiceTitle>
        <ServiceDescription>
          Parce que le web d'aujourd'hui ce n'est pas le web d'il y a 10 ans, vos clients
          attendent plus de votre site internet que du simple contenu figé dans le temps.
        </ServiceDescription>
        <ServiceDescription>
          Distinguez-vous en intégrant à votre site{' '}
          <strong>un calculateur de prix, un simulateur en 3D ou même un mini-jeu</strong> pour
          diminuer votre taux de rebond et fidéliser vos visiteurs.
        </ServiceDescription>
      </Service>
    </ServicesContainer>
  </ServicesBackground>
);

export default Services;
