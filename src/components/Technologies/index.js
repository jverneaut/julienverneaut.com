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
  margin-top: 16px;
  line-height: 1em;
`;

const TechnologiesTitle = styled.h2`
  margin-bottom: 16px;
`;

const TechnologiesGroup = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
  }
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
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-right: 0;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TechnologyImg = styled.img`
  max-height: 32px;
  max-width: 56px;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    max-width: unset;
    height: 32px;
  }
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


const dashAnimHorizontal = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(8px);
  }
`;

const DashedLineHorizontal = styled.svg`
  position: absolute;
  left: 24px;
  right: 0;
  width: calc(100% - 48px - 8px);
  height: 2px;
  top: calc(24px + 1em + 16px);
  z-index: -1;
  animation: ${dashAnimHorizontal} 0.5s linear infinite;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: none;
  }
`;

const DashedLineHorizontalPath = styled.line`
  stroke: ${props => props.theme.colors.dark};
  stroke-width: 2px;
  opacity: 0.12;
  stroke-dasharray: 4px;
`;

const dashAnimVertical = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(8px);
  }
`;

const DashedLineVertical = styled.svg`
  position: absolute;
  left: 24px;
  top: calc(1em + 16px);
  left: 50%;
  right: 0;
  height: calc(100% - 1em - 16px - 8px);
  width: 2px;
  z-index: -1;
  display: none;
  animation: ${dashAnimVertical} 10s linear infinite;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: unset;
  }
`;

const DashedLineVerticalPath = styled.line`
  stroke: ${props => props.theme.colors.dark};
  stroke-width: 2px;
  opacity: 0.12;
  stroke-dasharray: 4px;
  animation: ${dash} 20s linear infinite;
`;

const Technologies = () => (
  <TechnologiesContainer>
    <TechnologiesTitle>
      Mes technologies préférées :
    </TechnologiesTitle>
    <TechnologiesGroup>
      <Technology href="https://reactjs.org/">
        <TechnologyImg src={ReactImg} alt="" />
        <TechnologyName>React</TechnologyName>
      </Technology>
      <Technology href="https://nodejs.org/">
        <TechnologyImg src={NodeImg} alt="" />
        <TechnologyName>Node</TechnologyName>
      </Technology>
      <Technology href="http://expressjs.com/">
        <TechnologyImg src={ExpressImg} alt="" />
        <TechnologyName>Express</TechnologyName>
      </Technology>
      <Technology href="https://www.mongodb.com/">
        <TechnologyImg src={MongoImg} alt="" />
        <TechnologyName>MongoDb</TechnologyName>
      </Technology>
    </TechnologiesGroup>
    <DashedLineHorizontal>
      <DashedLineHorizontalPath x1="0" y1="1" x2="100%" y2="1" />
    </DashedLineHorizontal>
    <DashedLineVertical>
      <DashedLineVerticalPath x1="1" y1="0" x2="1" y2="100%" />
    </DashedLineVertical>
  </TechnologiesContainer>
);

export default Technologies;