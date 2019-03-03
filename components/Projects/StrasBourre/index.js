import React, { Component } from 'react';

import reveal from '../../reveal';

import Project, {
  Badge,
  PhonePreview,
  ProjectContent,
  ProjectDescription,
  ProjectLink,
  ProjectName,
  ProjectParagraph
} from '../Project';

class StrasBourre extends Component {
  render() {
    return (
      <Project>
        <PhonePreview src="/static/img/projects/strasbourre-screen.png" alt="" />
        <ProjectContent>
          <ProjectName>StrasBourre</ProjectName>
          <ProjectDescription>
            <ProjectParagraph>
              StrasBourre est un jeu à boire hyperlocal destiné à animer les soirées strasbourgeoises. La semaine de sa sortie, il se classe dans les Top 100 nouveautés jeux Android et Top 100 jeux de société Apple. Il totalise aujourd'hui plus de 5 000 téléchargements.
            </ProjectParagraph>
            <ProjectParagraph>
              Réalisé en duo, ce jeu nous a permis d'explorer différentes facettes du marketing et de la communication en plus de l'aspect technique du projet (interface admin + API Node.js, application React Native).
            </ProjectParagraph>
          </ProjectDescription>
          <a
            href='https://play.google.com/store/apps/details?id=com.jverneaut.strasbourre'
            target="_blank"
            rel="noopener noreferrer">
            <Badge alt='Disponible sur Google Play' src="/static/img/projects/PlayStore.png" />
          </a>
          <a
            href='https://itunes.apple.com/us/app/strasbourre/id1445406478?mt=8'
            target="_blank"
            rel="noopener noreferrer">
            <Badge alt='Disponible sur Apple Store' src="/static/img/projects/appBadge.png" />
          </a>
          <ProjectLink href="http://www.strasbourre.fr">
            StrasBourre.fr →
      </ProjectLink>
        </ProjectContent>
      </Project>
    )
  }
}

export default reveal(StrasBourre);
