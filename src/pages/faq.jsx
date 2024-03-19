import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import FaqMain from '../components/faq';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <FaqMain/>
    </Wrapper>
  );
};

export default index;