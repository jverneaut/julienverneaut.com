import styled from 'styled-components';

export default styled.ul`
  margin-bottom: 56px;
`;

export const Title = styled.li`
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Skill = styled.li`
  color: ${props => props.theme.colors.dark};
  opacity: 0.7;
  margin-top: 16px;
`;
