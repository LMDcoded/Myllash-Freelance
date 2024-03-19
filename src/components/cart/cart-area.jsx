import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import useCart from '../../hooks/use-cart';
import { add_cart_product, cartProducts, cart_product, clear_cart, decrease_quantity, get_cart_products, remove_cart_product } 
from '../../redux/features/cart-slice';
import { useEffect } from 'react';

const CartInfo = () => {
  const cartItems = useSelector(state => state.cart.cart_products);;
  const dispatch = useDispatch();
  const {total} = useCart();
  useEffect(() => {
    dispatch(get_cart_products())
  },[dispatch])
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          {cartItems.length === 0 &&
            <div className='text-center'>
              <h3>Your cart is empty</h3>
              <Link href={'/product'}><a className="tp-btn mt-15">Return to shop</a></Link>
            </div>
          }

         {cartItems.length > 0 && <div className="row">
            <div className="col-12">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, i) => (
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

                        <td className="product-quantity text-center">
                          <div className="product-quantity mt-10 mb-10">
                            <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i className="fa fa-minus"></i></button>
                                <input className="cart-input" onChange={(e) => e.target.value} value={item.quantity} type="text" />
                                <button onClick={() => dispatch(add_cart_product(item))} className="cart-plus">
                                <i className="fa fa-plus"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">
                            {item.price === 'free' ? 'Free' : `$${item.quantity * item.price}`}
                          </span>
                        </td>
                        <td onClick={() => dispatch(remove_cart_product(item))} className="product-remove">
                          <button ><i className="fa fa-times"></i></button>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="coupon-all">
                    <div className="coupon d-sm-flex align-items-center">
                      <input required id="coupon_code" className="input-text" name="coupon_code" defaultValue=""
                        placeholder="Coupon code" type="text" />
                      <button className="tp-btn" name="apply_coupon" type="submit">Apply
                        coupon</button>
                    </div>
                    <div className="coupon2">
                      <button onClick={() => dispatch(clear_cart())} className="tp-btn" 
                      name="update_cart" type="button">Clear cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 ml-auto">
                  <div className="cart-page-total">
                    <h2>Cart totals</h2>
                    <ul className="mb-20">
                      <li>Subtotal <span>${total}</span></li>
                      <li>Total <span>${total}</span></li>
                    </ul>
                    <Link href="/checkout"><a className="tp-btn">Proceed to checkout</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </section>
    </>
  );
};

export default CartInfo;