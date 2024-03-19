import { Wrapper } from "../layout";
import SEO from "../components/seo";
import WishlistMain from "../components/wishlist";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Login'} />
      <WishlistMain/>
    </Wrapper>
  )
}
