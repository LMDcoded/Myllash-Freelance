import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { get_cart_products } from '../../redux/features/cart-slice';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CheckoutArea from './checkout-area';
import CouponArea from './coupon-area';



const Checkout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
    dispatch(get_cart_products())
  }, [dispatch]);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Checkout'} />
      <CouponArea/>
      <CheckoutArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default Checkout;