import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CartMain from '../components/cart';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Cart'} />
      <CartMain />
    </Wrapper>
  );
};

export default index;