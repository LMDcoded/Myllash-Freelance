import { Wrapper } from "../layout";
import SEO from "../components/seo";
import RegisterMain from "../components/register";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Register'} />
      <RegisterMain/>
    </Wrapper>
  )
}
