import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ProductsMain from '../components/products';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Products'} />
      <ProductsMain/>
    </Wrapper>
  )
}
