import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import { useRouter } from 'next/router';
import { job_data } from '../../data';
import JobDetailsMain from "../../components/job-details";


const JobDynamicDetails = () => {
  const router = useRouter();
  const {id} = router.query;
  const job_item = job_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Job Details'} />
      <JobDetailsMain job={job_item}/>
    </Wrapper>
  );
};

export default JobDynamicDetails;

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}