import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CountryArea from './country-area';
import HeroArea from './hero-area';
import ProjectArea from './project-area';
import Services from './services';
import TeamArea from './team-area';
import TestimonialArea from './testimonial-area';

const HomeThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  
  return (
    <Wrapper>
      <HeaderThree/>
      <HeroArea/>
      <Services/>
      <ProjectArea/>
      <TeamArea/>
      <CountryArea/>
      <TestimonialArea/>
      <BrandArea/>
      <BlogArea/>
      <FooterThree/>
    </Wrapper>
  );
};

export default HomeThree;