import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeFiveMain from '../components/homes/home-5';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Five'} />
      <HomeFiveMain />
    </Wrapper>
  );
};

export default index;