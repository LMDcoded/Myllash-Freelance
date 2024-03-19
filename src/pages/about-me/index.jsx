import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import AboutMeMain from '../../components/about-me';
import { team_data } from '../../data';

const team = team_data[10]

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About Me'} />
      <AboutMeMain team={team} />
    </Wrapper>
  );
};

export default index;