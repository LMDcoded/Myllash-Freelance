import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import { useRouter } from 'next/router';
import { blog_data } from '../../data';
import BlogDetailsMain from '../../components/blog-details';


const BlogDynamicDetails = () => {
  const router = useRouter();
  const {id} = router.query;
  const blog = blog_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain blog={blog}/>
    </Wrapper>
  );
};

export default BlogDynamicDetails;

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}