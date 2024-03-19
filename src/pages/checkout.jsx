import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CheckoutMain from '../components/checkout';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Cart'} />
      <CheckoutMain />
    </Wrapper>
  );
};

export default index;