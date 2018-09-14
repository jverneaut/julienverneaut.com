import styled from 'styled-components';

export const ColumnSmall = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    float: left;
    width: 50%;
  }
`;

export const ColumnLarge = styled.div`
  width: 25%;
  float: left;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    width: 100%;
    float: unset;
  }
`;
