import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Cta from '../../common/cta/cta';
import CaseImageArea from './case-image-area';
import CaseImageAreaTwo from './case-image-area-2';
import IntroduceTwo from './introduce-2';
import IntroduceArea from './introduce-area';
import ProjectInfoArea from './project-info-area';

const PortfolioDetails = ({case_item}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={case_item?.title?case_item?.title:'Case Details'} />
      <CaseImageArea case_item={case_item}/>
      <ProjectInfoArea item={case_item} />
      <IntroduceArea/>
      <CaseImageAreaTwo/>
      <IntroduceTwo/>
      <Cta/>
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioDetails;