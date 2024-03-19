import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceThreeMain from "../components/services/service-3";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Three'} />
      <ServiceThreeMain/>
    </Wrapper>
  )
}
