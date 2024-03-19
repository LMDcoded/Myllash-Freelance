import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeSixMain from '../components/homes/home-6';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Six'} />
      <HomeSixMain />
    </Wrapper>
  );
};

export default index;