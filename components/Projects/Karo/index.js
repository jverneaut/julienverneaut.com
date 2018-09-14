import React, { Component } from 'react';

import reveal from '../../reveal';

import Project, {
  Badge,
  PhonePreview,
  ProjectContent,
  ProjectDescription,
  ProjectName,
  ProjectParagraph
} from '../Project';

class Karo extends Component {
  render() {
    return (
      <Project>
        <PhonePreview src="/static/img/projects/Karo.png" alt="" />
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
          <a
            href='https://play.google.com/store/apps/details?id=com.gmail.jverneaut.verneaut'
            target="_blank"
            rel="noopener noreferrer">
            <Badge alt='Disponible sur Google Play' src="/static/img/projects/PlayStore.png" />
          </a>
        </ProjectContent>
      </Project>
    )
  }
}

export default reveal(Karo);
