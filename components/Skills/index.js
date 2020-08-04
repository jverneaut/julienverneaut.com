import React, { Component } from 'react';
import styled from 'styled-components';

import reveal from '../reveal';

import { ColumnLarge, ColumnSmall } from './Column';
import Category, { Skill, Title } from './Category';

const SkillsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 32px;
  padding: 32px 24px;
`;

const SkillsTitle = styled.h2`
  margin-bottom: 32px;
`;

class Skills extends Component {
  render() {
    return (
      <SkillsContainer>
        <SkillsTitle>Mes compétences :</SkillsTitle>
        <ColumnSmall>
          <ColumnLarge>
            <Category>
              <Title>Frontend</Title>
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
            </Category>
          </ColumnLarge>
          <ColumnLarge>
            <Category>
              <Title>Backend</Title>
              <Skill>Node.js</Skill>
              <Skill>Express</Skill>
              <Skill>MongoDB</Skill>
              <Skill>PassportJs</Skill>
              <Skill>Stripe</Skill>
              <Skill>socket.io</Skill>
            </Category>
            <Category>
              <Title>Mobile</Title>
              <Skill>React Native</Skill>
              <Skill>Corona SDK</Skill>
            </Category>
          </ColumnLarge>
        </ColumnSmall>
        <ColumnSmall>
          <ColumnLarge>
            <Category>
              <Title>Design</Title>
              <Skill>Photoshop/Affinity</Skill>
              <Skill>Sketch</Skill>
            </Category>
            <Category>
              <Title>Analyse de données</Title>
              <Skill>Python</Skill>
              <Skill>Pandas</Skill>
              <Skill>Scikit Learn</Skill>
              <Skill>Matplotlib</Skill>
              <Skill>Beatiful Soup</Skill>
              <Skill>Jupyter</Skill>
            </Category>
          </ColumnLarge>
          <ColumnLarge>
            <Category>
              <Title>Marketing</Title>
              <Skill>Buffer</Skill>
              <Skill>Google Analytics</Skill>
              <Skill>Mailchimp</Skill>
            </Category>
            <Category>
              <Title>Mes petits +</Title>
              <Skill>VBA</Skill>
              <Skill>OpenCv</Skill>
              <Skill>git</Skill>
              <Skill>Electron</Skill>
              <Skill>ssh</Skill>
            </Category>
          </ColumnLarge>
        </ColumnSmall>
      </SkillsContainer>
    );
  }
}

export default reveal(Skills);
