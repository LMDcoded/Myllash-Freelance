import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product, get_cart_products } from '../../redux/features/cart-slice';
import { get_wishlist_products, remove_wishlist } from '../../redux/features/wishlist-slice';

const WishlistArea = () => {
  const {wishlists} = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_wishlist_products())
    dispatch(get_cart_products())
  },[dispatch])
  return (
    <>
     <section className="cart-area pt-100 pb-100">
        <div className="container">
          {wishlists.length === 0 &&
            <div className='text-center'>
              <h3>Your wishlist is empty</h3>
              <Link href={'/product'}><a className="tp-btn mt-15">Return to shop</a></Link>
            </div>
          }

         {wishlists.length > 0 && <div className="row">
            <div className="col-12">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Add Cart</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlists.map((item, i) => (
                      <tr key={i}>
                        <td className="product-thumbnail">
                          <Link href={`/shop-details/${item.id}`}>
                          <img src={item.img} alt="" />
                         </Link>
                        </td>
                        <td className="product-name">
                          <Link href={`/product-details/${item.id}`}>{item.title}</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$ {item.price}</span>
                        </td>

                        <td className="product-subtotal">
                          <span className="amount">
                            <button onClick={() => dispatch(add_cart_product(item))} className='tp-btn'>Add to cart</button>
                          </span>
                        </td>
                        <td className="product-remove">
                          <button onClick={()=> dispatch(remove_wishlist(item))}><i className="fa fa-times"></i></button>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>}
        </div>
      </section> 
    </>
  );
};

export default WishlistArea;