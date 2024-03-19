import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PriceMain from '../components/price';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Price'} />
      <PriceMain/>
    </Wrapper>
  )
}
