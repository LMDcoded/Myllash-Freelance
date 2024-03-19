import React from 'react';
import { productsData } from '../../data';
import ProductsItem from './products-item';

const product_items = productsData;

const ProductsArea = () => {
  return (
    <>
      <div className="tp-product-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <ProductsItem itemsPerPage={8} items={product_items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsArea;