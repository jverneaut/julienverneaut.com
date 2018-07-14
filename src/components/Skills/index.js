import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px;
  width: 100%;
`;

const SkillsRow = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    float: left;
    width: 50%;
  }
`;

const SkillCategory = styled.ul`
  margin-top: 56px;
`;

const SkillCategoryTitle = styled.li`
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  margin: 24px 0;
`;

const Skill = styled.li`
  color: ${props => props.theme.colors.dark};
  opacity: 0.7;
  margin-top: 16px;
`;

const Column = styled.div`
  width: 25%;
  float: left;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    width: 100%;
    float: unset;
  }
`;

const Skills = () => (
  <SkillsContainer>
    <SkillsRow>
      <Column>
        <SkillCategory>
          <SkillCategoryTitle>Frontend</SkillCategoryTitle>
          <Skill>html/css</Skill>
          <Skill>sass</Skill>
          <Skill>gulp</Skill>
          <Skill>javascript es5/es6</Skill>
          <Skill>jQuery</Skill>
          <Skill>React</Skill>
          <Skill>Redux</Skill>
          <Skill>Gatsby</Skill>
          <Skill>Bootstrap</Skill>
          <Skill>Material UI</Skill>
          <Skill>Bulma.css</Skill>
          <Skill>bem</Skill>
          <Skill>Wordpress</Skill>
        </SkillCategory>
      </Column>
      <Column>
        <SkillCategory>
          <SkillCategoryTitle>Backend</SkillCategoryTitle>
          <Skill>Node.js</Skill>
          <Skill>Express</Skill>
          <Skill>MongoDB</Skill>
          <Skill>PassportJs</Skill>
          <Skill>Stripe</Skill>
          <Skill>socket.io</Skill>
        </SkillCategory>
        <SkillCategory>
          <SkillCategoryTitle>Mobile</SkillCategoryTitle>
          <Skill>React Native</Skill>
          <Skill>Corona SDK</Skill>
        </SkillCategory>
      </Column>
    </SkillsRow>
    <SkillsRow>
      <Column>
        <SkillCategory>
          <SkillCategoryTitle>Design</SkillCategoryTitle>
          <Skill>Photoshop/Affinity</Skill>
          <Skill>Sketch</Skill>
        </SkillCategory>
        <SkillCategory>
          <SkillCategoryTitle>Analyse de données</SkillCategoryTitle>
          <Skill>Python</Skill>
          <Skill>Pandas</Skill>
          <Skill>Scikit Learn</Skill>
          <Skill>Matplotlib</Skill>
          <Skill>Beatiful Soup</Skill>
        </SkillCategory>
      </Column>
      <Column>
        <SkillCategory>
          <SkillCategoryTitle>Marketing</SkillCategoryTitle>
          <Skill>Buffer</Skill>
          <Skill>Google Analytics</Skill>
          <Skill>Mailchimp</Skill>
        </SkillCategory>
        <SkillCategory>
          <SkillCategoryTitle>Autre</SkillCategoryTitle>
          <Skill>OpenCv</Skill>
          <Skill>git</Skill>
          <Skill>Electron</Skill>
          <Skill>ssh</Skill>
        </SkillCategory>
      </Column>
    </SkillsRow>
  </SkillsContainer>
);

export default Skills;
