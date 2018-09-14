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
    <TechnologiesTitle>
      Mes technologies favorites :
    </TechnologiesTitle>
    <TechnologiesGroup>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src="/static/img/technologies/react.png" alt="" />
        <TechnologyName>React</TechnologyName>
      </Technology>
      <Technology href="https://nodejs.org/">
        <TechnologyImg src="/static/img/technologies/node.png" alt="" />
        <TechnologyName>Node</TechnologyName>
      </Technology>
      <Technology href="http://expressjs.com/">
        <TechnologyImg src="/static/img/technologies/Expressjs.png" alt="" />
        <TechnologyName>Express</TechnologyName>
      </Technology>
      <Technology href="https://www.mongodb.com/">
        <TechnologyImg src="/static/img/technologies/mongo.png" alt="" />
        <TechnologyName>MongoDb</TechnologyName>
      </Technology>
    </TechnologiesGroup>
    <DashedLine />
  </TechnologiesContainer>
);

export default Technologies;
