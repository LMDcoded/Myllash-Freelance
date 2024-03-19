import { Wrapper } from "../../layout";
import SEO from "../../components/seo";
import JobDetailsMain from "../../components/job-details";
import { job_data } from "../../data";

const job = job_data[0]

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Job Details'} />
      <JobDetailsMain job={job}/>
    </Wrapper>
  )
}
