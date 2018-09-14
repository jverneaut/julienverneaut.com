import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 96px;
  &:last-child {
    margin-bottom: 56px;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    margin-top: 64px;
  }
`;

export const ProjectContent = styled.div`
  margin-right: ${props => props.left ? '80px' : '0'};
  margin-left: ${props => props.left ? '0' : '80px'};
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-left: 0;
    margin-right: 0;
    order: 1;
    margin-top: 32px;
  }
`;

export const PhonePreview = styled.img`
  max-height: 400px;
  max-width: 400px;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const ProjectName = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
`;

export const ProjectDescription = styled.div`
  opacity: 0.7;
  margin-top: 32px;
  line-height: 1.5;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const ProjectParagraph = styled.p`
  flex: 1;
  margin-right: 32px;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-right: 0;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Badge = styled.img`
  height: 40px;
  margin-top: 32px;
`;

export const ProjectLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  display: block;
  margin-top: 24px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
`;
