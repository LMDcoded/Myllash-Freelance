import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import { useRouter } from 'next/router';
import { team_data } from '../../data';
import AboutMeMain from '../../components/about-me';


const AboutDynamicDetails = () => {
  const router = useRouter();
  const {id} = router.query;
  const team = team_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'About Me'} />
      <AboutMeMain team={team} />
    </Wrapper>
  );
};

export default AboutDynamicDetails;

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}