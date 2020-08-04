import React from 'react';

import Project, {
  PhonePreview,
  ProjectContent,
  ProjectDescription,
  ProjectLink,
  ProjectName,
  ProjectParagraph,
} from '../Project';

const Laboratoire = () => (
  <Project>
    <ProjectContent left>
      <ProjectName>Le laboratoire</ProjectName>
      <ProjectDescription>
        <ProjectParagraph>
          Ce site rassemble mes expérimentations frontend. Il contient des essais d'animations,
          des expériences avec WebGL, des essais d'api et bien d'autres choses.
          <br />
          <br />
          <em>THE</em> place to be{' '}
          <span role="img" aria-label="sunglasses">
            😎
          </span>
        </ProjectParagraph>
      </ProjectDescription>
      <ProjectLink href="http://lab.julienverneaut.com">Accéder au site →</ProjectLink>
    </ProjectContent>
    <a href="http://lab.julienverneaut.com" target="_blank">
      <PhonePreview src="/static/img/projects/lab.png" alt="" />
    </a>
  </Project>
);

export default Laboratoire;
