import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { IoLogoTableau } from 'react-icons/io5';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world
      from Back-End to Front-End
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoTableau size="3rem" />
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tableau and Plotly Dash
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
