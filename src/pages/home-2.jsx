import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeTwoMain from '../components/homes/home-2';

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Home Two'} />
    <HomeTwoMain />
  </Wrapper>
  );
};

export default index;