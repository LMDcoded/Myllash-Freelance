import { Wrapper } from "../layout";
import SEO from "../components/seo";
import TestimonialsMain from "../components/testimonial";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonial'} />
      <TestimonialsMain/>
    </Wrapper>
  )
}
