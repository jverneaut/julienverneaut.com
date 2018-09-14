import styled from 'styled-components';

export default styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => props.light ? 'white' : props.theme.colors.primary};
  color: ${props => props.light ? props.theme.colors.dark : 'white'};
  padding: 16px 24px;
  margin-right: 16px;
  display: inline-block;
  border-radius: 4px;
  margin-top: 32px;
  box-shadow: 0 4px 16px rgba(10, 29, 66, 0.08);
  transition: 0.3s all;
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: ${props => props.light ? 'white' : props.theme.colors.primary};
    background-color: ${props => props.light ? props.theme.colors.dark : 'white'};
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    &:last-of-type {
      margin-top: 16px;
    }
  }
`;

export const ButtonIcon = styled.i`
  margin-right: 16px;
  font-size: 16px;
`;