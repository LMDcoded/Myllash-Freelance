import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import PaginationArea from '../../ui/pagination';
import { add_cart_product, get_cart_products } from '../../redux/features/cart-slice';
import { add_wishlist, get_wishlist_products } from '../../redux/features/wishlist-slice';

const ProductsItem = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);
  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const dispatch = useDispatch();
  const { cart_products } = useSelector(state => state.cart);
  const { wishlists } = useSelector(state => state.wishlist);
  // set local storage
  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
  }, [dispatch])

  // handleAddProduct
  const handleAddProduct = (item) => {
    dispatch(add_cart_product(item))
  }

    // handle wishlist
    const handleWishlist = (item) => {
      const checkItem = wishlists.findIndex(i => i.id === item.id);
      if (checkItem >= 0) {
        dispatch(add_wishlist({
          changeType: 'remove',
          item
        }))
      }
      else {
        dispatch(add_wishlist({
          changeType: 'added',
          item
        }))
      }
    }

  return (
    <>
      {currentItems && currentItems.map((item) => {
        const { id, duration, delay, img, title, price, rating } = item;
        const isCartSelected = cart_products.find(i => i.id === id);
        const isWishlistSelected = wishlists.find(w => w.id === id)
        return <div key={id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow tpfadeUp"
          data-wow-duration={duration} data-wow-delay={delay}>
          <div className="tpproduct text-center mb-30">
            <div className="tpproduct__img">
              <img className="w-100" src={img} alt="" />
              <div className="tp-product-icon">
                <button onClick={() => handleAddProduct(item)}>
                  <i className={isCartSelected ? 'fas fa-check' : "fal fa-shopping-basket"}></i>
                </button>
                <button onClick={() => handleWishlist(item)}>
                  <i className={isWishlistSelected ? 'fas fa-heart' : "fal fa-heart"}></i>
                </button>
              </div>
            </div>
            <div className="tpproduct__meta">
              <h4 className="tp-product-title">
                <Link href={`/product-details/${id}`}>
                  <a>{title}</a>
                </Link>
              </h4>
              <span>${price}</span>
              <div className="product-rating">
                <Rating
                  fullSymbol={<i className="fas fa-star"></i>}
                  emptySymbol={<i className="fal fa-star"></i>}
                  initialRating={rating}
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      })}

      {/* pagination start*/}
      <div className='basic-pagination mt-70'>
        <PaginationArea handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
      {/* pagination end*/}
    </>
  );
};

export default ProductsItem;