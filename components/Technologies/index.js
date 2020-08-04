import React from 'react';
import styled from 'styled-components';

import DashedLine from './DashedLine';
import Technology, { TechnologyImg, TechnologyName } from './Technology';

const TechnologiesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  margin-top: 16px;
  line-height: 1em;
`;

const TechnologiesTitle = styled.h2`
  margin-bottom: 24px;
`;

const TechnologiesGroup = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Technologies = () => (
  <TechnologiesContainer>
    <TechnologiesTitle>Mes technologies favorites :</TechnologiesTitle>
    <TechnologiesGroup>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src="/static/img/technologies/react.png" alt="" />
        <TechnologyName>React</TechnologyName>
      </Technology>
      <Technology href="https://nodejs.org/">
        <TechnologyImg src="/static/img/technologies/node.png" alt="" />
        <TechnologyName>node.js</TechnologyName>
      </Technology>
      <Technology href="https://webpack.js.org/">
        <TechnologyImg src="/static/img/technologies/webpack.svg" alt="" />
        <TechnologyName>Webpack</TechnologyName>
      </Technology>
      <Technology href="https://wordpress.org/">
        <TechnologyImg src="/static/img/technologies/wp.svg" alt="" />
        <TechnologyName>WordPress</TechnologyName>
      </Technology>
    </TechnologiesGroup>
    <DashedLine />
  </TechnologiesContainer>
);

export default Technologies;
