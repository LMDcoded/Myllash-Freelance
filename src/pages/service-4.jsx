import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceFourMain from "../components/services/service-4";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Three'} />
      <ServiceFourMain/>
    </Wrapper>
  )
}
