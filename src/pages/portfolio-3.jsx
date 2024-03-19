import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PortfolioThreeMain from '../components/portfolios/portfolio-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Three'} />
      <PortfolioThreeMain/>
    </Wrapper>
  )
}
