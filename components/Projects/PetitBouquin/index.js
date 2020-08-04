import React, { Component } from 'react';

import reveal from '../../reveal';

import Project, {
  PhonePreview,
  ProjectContent,
  ProjectDescription,
  ProjectLink,
  ProjectName,
  ProjectParagraph,
} from '../Project';

class PetitBouquin extends Component {
  render() {
    return (
      <Project>
        <ProjectContent left>
          <ProjectName>Petit Bouquin</ProjectName>
          <ProjectDescription>
            <ProjectParagraph>
              PetitBouquin.com est un site au design épuré sur lequel je publie le résumé de
              livres qui m'ont particulièrement plu. Grâce à React et au framework Gatsby, il ne
              nécessite pas de backend. Ce projet intègre donc des services externes tels que
              Mailchimp et Disqus pour fonctionner.
            </ProjectParagraph>
          </ProjectDescription>
          <ProjectLink href="https://www.petitbouquin.com">
            Accéder à Petit Bouquin →
          </ProjectLink>
        </ProjectContent>
        <a href="https://www.petitbouquin.com">
          <PhonePreview src="/static/img/projects/PB.png" alt="" />
        </a>
      </Project>
    );
  }
}

export default reveal(PetitBouquin);
