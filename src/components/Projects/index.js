import React from 'react';
import styled from 'styled-components';

import PetitB from './PB.png';
import Karo from './Karo.png';
import PlayStore from './PlayStore.png';

const ProjectsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

const ProjectContent = styled.div`
  margin-right: ${props => props.left ? '80px' : '0'};
  margin-left: ${props => props.left ? '0' : '80px'};
  flex: 1;
`;

const Badge = styled.img`
  height: 40px;
  margin-top: 32px;
`;

const PhonePreview = styled.img`
  max-height: 400px;
  max-width: 400px;
`;

const ProjectName = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
`;

const ProjectDescription = styled.div`
  opacity: 0.7;
  margin-top: 32px;
  line-height: 1.5;
  display: flex;
`;

const ProjectParagraph = styled.p`
  flex: 1;
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <Project>
      <PhonePreview src={Karo} alt="" />
      <ProjectContent>
        <ProjectName>Karo</ProjectName>
        <ProjectDescription>
          <ProjectParagraph>
            « Karo te permet de te relaxer tout en stimulant tes neurones. Déplace et retourne les tuiles jusqu’à ce qu’elles soient toutes de la même couleur. Joue pour te détendre avec le mode Zen ou relève le défi du mode Challenge. »
          </ProjectParagraph>
          <ProjectParagraph>
            Du design à la programmation en passant par la gestion de projet, Karo m'a permi d'aborder toutes les étapes nécéssaires à la création d'un produit.
          </ProjectParagraph>
        </ProjectDescription>
        <a href='https://play.google.com/store/apps/details?id=com.gmail.jverneaut.verneaut&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <Badge alt='Disponible sur Google Play' src={PlayStore} />
        </a>
      </ProjectContent>
    </Project>
    <Project>
      <ProjectContent left>
        <ProjectName>Petit Bouquin</ProjectName>
        <ProjectDescription>
          <ProjectParagraph>
            PetitBouquin.com est un site au design épuré sur lequel je publie le résumé de livres qui m'ont particulièrement plu. Grâce à React et au framework Gatsby, il ne nécessite pas de backend. Ce projet intègre donc des services externes tels que Mailchimp et Disqus pour fonctionner.
          </ProjectParagraph>
        </ProjectDescription>
      </ProjectContent>
      <PhonePreview src={PetitB} alt="" />
    </Project>
  </ProjectsContainer>
);

export default Projects;
