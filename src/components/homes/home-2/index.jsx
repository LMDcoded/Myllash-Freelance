import React, { useEffect } from 'react';
import { FooterTwo, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import ClientFeedback from './client-feedback';
import CtaArea from './cta-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import Services from './services';

const HomeTwo = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <HeaderTwo />
      <HeroArea />
      <Services/>
      <ProjectArea/>
      <ClientFeedback/>
      <CtaArea/>
      <BlogArea/>
      <NewsLetter/>
      <FooterTwo/>
    </Wrapper>
  );
};

export default HomeTwo;