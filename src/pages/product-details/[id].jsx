import React from 'react';
import SEO from '../../components/seo';
import { productsData } from '../../data';
import { Wrapper } from '../../layout';
import ProductsDetailsMain from '../../components/product-details';
import { useRouter } from 'next/router';


const ProductDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product_item = productsData.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Product Details'} />
      <ProductsDetailsMain product={product_item} />
    </Wrapper>
  );
};

export default ProductDynamicDetails;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}