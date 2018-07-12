import React from 'react';

import styled, { keyframes } from 'styled-components';

import ExpressImg from './Expressjs.png';
import NodeImg from './node.png';
import MongoImg from './mongo.png';
import ReactImg from './react.png';

const TechnologiesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
`;

const TechnologiesGroup = styled.div`
  display: flex;
`;

const Technology = styled.a`
  text-decoration: none;
  background: white;
  flex: 1;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  padding: 8px 0;
  border-radius: 4px;
  border: 1px solid rgba(10, 29, 66, 0.06);
  &:last-child {
    margin-right: 0;
  }
`;

const TechnologyImg = styled.img`
  max-height: 32px;
  max-width: 56px;
`;
const TechnologyName = styled.span`
  margin-left: 16px;
  color: ${props => props.theme.colors.dark};
`;

const dash = keyframes`
  to {
    stroke-dashoffset: -300;
  }
`;

const DashedLine = styled.svg`
  position: absolute;
  left: 24px;
  right: 0;
  width: calc(100% - 48px);
  height: 2px;
  top: 24px;
  z-index: -1;
`;

const DashedLinePath = styled.line`
  stroke: ${props => props.theme.colors.dark};
  stroke-width: 2;
  opacity: 0.12;
  stroke-dasharray: 4;
  animation: ${dash} 20s linear infinite;
`;

const Technologies = () => (
  <TechnologiesContainer>
    <TechnologiesGroup>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src={ReactImg} alt="" />
        <TechnologyName>React</TechnologyName>
      </Technology>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src={NodeImg} alt="" />
        <TechnologyName>Node</TechnologyName>
      </Technology>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src={ExpressImg} alt="" />
        <TechnologyName>Express</TechnologyName>
      </Technology>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src={MongoImg} alt="" />
        <TechnologyName>MongoDb</TechnologyName>
      </Technology>
    </TechnologiesGroup>
    <DashedLine>
      <DashedLinePath x1="0" y1="1" x2="100%" y2="1" />
    </DashedLine>
  </TechnologiesContainer>
);

export default Technologies;