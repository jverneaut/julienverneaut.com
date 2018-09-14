import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

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
  top: calc(24px + 1em + 24px);
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
  top: calc(1em + 24px);
  left: 50%;
  right: 0;
  height: calc(100% - 1em - 16px - 16px);
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

const DashedLine = () => (
  <Fragment>
    <DashedLineHorizontal>
      <DashedLineHorizontalPath x1="0" y1="1" x2="100%" y2="1" />
    </DashedLineHorizontal>
    <DashedLineVertical>
      <DashedLineVerticalPath x1="1" y1="0" x2="1" y2="100%" />
    </DashedLineVertical>
  </Fragment>
);

export default DashedLine;
