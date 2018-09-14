import styled from 'styled-components';

export default styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
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
  border: 1px solid ${props => props.theme.colors.border};
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

export const TechnologyImg = styled.img`
  max-height: 32px;
  max-width: 56px;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    max-width: unset;
    height: 32px;
  }
`;

export const TechnologyName = styled.span`
  margin-left: 16px;
  color: ${props => props.theme.colors.dark};
`;
