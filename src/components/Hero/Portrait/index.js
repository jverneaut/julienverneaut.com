import React from 'react';
import styled, { keyframes } from 'styled-components';

import PortraitImg from './portrait_web.png';
import PortraitBackground from './background.svg';

const PortraitContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 64px 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    padding: 32px 0;
  }
`;

const PortraitImgContainer = styled.div`
  display: inline-block;
  position: relative;
  &::after {
    display: block;
    background: white;
    position: absolute;
    content: '';
    top: 8px;
    bottom: -8px;
    left: 8px;
    right: -8px;
    border-radius: 8px;
    z-index: -1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    position: initial;
    margin-left: 16px;
    &::after {
      display: none;
    }
  }
`;

const PortraitImgComponent = styled.img`
  vertical-align: middle;
  width: 192px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    box-shadow: unset;
    border-radius: 4px;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const PortraitImgBackground = styled.img`
  position: absolute;
  z-index: -1;
  top: -100px;
  left: -125px;
  animation: ${rotate360} 60s linear infinite;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    top: unset;
    left: unset;
    top: -140px;
    left: -290px;
  }
`;

const Portrait = () => (
  <PortraitContainer>
    <PortraitImgContainer>
      <PortraitImgBackground src={PortraitBackground} alt="" />
      <PortraitImgComponent src={PortraitImg} alt="" />
    </PortraitImgContainer>
  </PortraitContainer>
);

export default Portrait;
