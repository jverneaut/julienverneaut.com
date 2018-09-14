import styled from 'styled-components';

export default styled.ul`
  position: relative;
  &::before {
    left: -32px;
    position: absolute;
    content: '—';
    display: block;
    color: ${props => props.theme.colors.dark};
    opacity: 0.7;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    margin-top: 16px;
    &::before {
      display: none;
    }
  }
`;

export const Tab = styled.li`
  display: inline-block;
  margin-right: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const TabLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
  opacity: 0.7;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
