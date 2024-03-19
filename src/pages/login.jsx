import { Wrapper } from "../layout";
import SEO from "../components/seo";
import LoginMain from "../components/login";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Login'} />
      <LoginMain/>
    </Wrapper>
  )
}
