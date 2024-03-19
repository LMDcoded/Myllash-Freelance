import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceTwoMain from "../components/services/service-2";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Two'} />
      <ServiceTwoMain/>
    </Wrapper>
  )
}
