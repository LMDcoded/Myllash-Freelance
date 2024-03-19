import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeThreeMain from '../components/homes/home-3';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three'} />
      <HomeThreeMain />
    </Wrapper>
  );
};

export default index;