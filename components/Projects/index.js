import React from 'react';
import styled from 'styled-components';

import Karo from './Karo';
import PetitBouquin from './PetitBouquin';
import StrasBourre from './StrasBourre';
import Laboratoire from './Laboratoire';

const ProjectsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ProjectsTitle = styled.h2`
  margin-top: 80px;
  margin-bottom: 32px;
`;

const Projects = () => (
  <ProjectsContainer>
    <ProjectsTitle>Quelques-uns de mes projets :</ProjectsTitle>
    <Laboratoire />
    <StrasBourre />
    <PetitBouquin />
    <Karo />
  </ProjectsContainer>
);

export default Projects;
