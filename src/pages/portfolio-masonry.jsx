import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PortfolioMasonryMain from '../components/portfolios/portfolio-masonry';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Masonry'} />
      <PortfolioMasonryMain/>
    </Wrapper>
  )
}
