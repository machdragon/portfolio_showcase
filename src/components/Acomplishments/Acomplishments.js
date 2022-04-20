import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText0, BoxText } from './AcomplishmentsStyles';

const data = [
  { text0: '150%+', text: 'Quarterly Market-Neutral Returns'},
  { text0: '85%', text: 'Client Satisfaction Rating'},
  { text0: '2018', text: 'Yugioh North American Champion'},
  { text0: '5th', text: 'Place Global Finish'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText0>{card.text0}</BoxText0>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
