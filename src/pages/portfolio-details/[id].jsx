import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import PortfolioDetailsMain from '../../components/portfolios/portfolio-details';
import { portfolio_data } from '../../data';
import { useRouter } from 'next/router';


const PortfolioDynamicDetails = () => {
  const router = useRouter();
  const {id} = router.query;
  const case_item = portfolio_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default PortfolioDynamicDetails;

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}