import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeFourMain from '../components/homes/home-4';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Four'} />
      <HomeFourMain />
    </Wrapper>
  );
};

export default index;