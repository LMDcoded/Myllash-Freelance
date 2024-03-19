import { Wrapper } from "../layout";
import SEO from "../components/seo";
import JobMain from '../components/job';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Job'} />
      <JobMain />
    </Wrapper>
  )
}
