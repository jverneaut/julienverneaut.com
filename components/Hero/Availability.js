import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  margin-top: 32px;
  font-size: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const indicatorAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const Indicator = styled.div`
  display: block;
  content: '';
  background: #38c06e;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  position: relative;

  &::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 100%;
    content: '';
    animation: ${indicatorAnimation} 2s linear infinite;
  }
`;

const Text = styled.div`
  margin-left: 12px;
  opacity: 0.7;
`;

const Availability = ({ text }) => (
  <Container>
    <Indicator />
    <Text>{text}</Text>
  </Container>
);

export default Availability;
