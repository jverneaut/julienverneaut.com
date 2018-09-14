import React from 'react';
import styled from 'styled-components';

import Karo from './Karo';
import PetitBouquin from './PetitBouquin';

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
    <ProjectsTitle>Mes réalisations :</ProjectsTitle>
    <Karo />
    <PetitBouquin />
  </ProjectsContainer>
);

export default Projects;
