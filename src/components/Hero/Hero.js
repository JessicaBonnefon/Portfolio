import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi! I'm Jess, a Front-End developer with a great command of the most used technologies in the market.
        </SectionText>
        <Button onClick={() => window.location = '/' }>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;