import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useCart from '../../hooks/use-cart';

const countries = ['Bangladesh', 'Algeria', 'Afghanistan', 'Ghana', 'Albania', 'Bahrain', 'Colombia', 'Dominican Republic']
const payment_accordion = [
  {
    id: 'headingOne',
    target: 'collapseOne',
    title: ' Direct Bank Transfer',
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    show: true,
  },
  {
    id: 'headingTwo',
    target: 'collapseTwo',
    title: 'Cheque Payment',
    desc: "Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
  },
  {
    id: 'headingThree',
    target: 'collapseThree',
    title: 'PayPal',
    desc: "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  },
]

const CheckoutArea = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [shipBox, setShipBox] = useState(false);
  const cartItems = useSelector(state => state.cart.cart_products);
  const { total } = useCart();
  return (
      <section className="checkout-area pb-70">
        <div className="container">
          <form onSubmit={e => e.preventDefault()}>
            <div className="row">
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>Country <span className="required">*</span></label>
                        <select>
                          {countries.map((country, index) => (
                            <option key={index} defaultValue={index}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <InputBox col='col-md-6' label={'First Name'} placeholder="First Name" />
                    <InputBox col='col-md-6' label={'Last Name'} placeholder="Last Name" />
                    <InputBox required={false} label={'Company Name'} placeholder="Company Name" />
                    <InputBox label={'Street address'} placeholder="Street address" />
                    <InputBox required={false} placeholder="Apartment, suite, unit etc. (optional)" />
                    <InputBox label={'Town / City'} placeholder="Town / City" />
                    <InputBox col='col-md-6' label={'State / County'} placeholder="State / County" />
                    <InputBox col='col-md-6' label={'Postcode / Zip'} placeholder="Postcode / Zip" />
                    <InputBox col='col-md-6' type='email' label={'Email Address'} placeholder="Email Address" />
                    <InputBox col='col-md-6' label={'Phone'} placeholder="Phone" />

                    <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input id="cbox" type="checkbox" onClick={() => setCreateAccount(!createAccount)} />
                        <label>Create an account?</label>
                      </div>
                      {createAccount && <div id="cbox_info" className="checkout-form-list create-account">
                        <p>Create an account by entering the information below. If you are a returning
                          customer please login at the top of the page.</p>
                        <label>Account password <span className="required">*</span></label>
                        <input type="password" placeholder="password" />
                      </div>}
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        <label>Ship to a different address?</label>
                        <input onClick={() => setShipBox(!shipBox)} id="ship-box" type="checkbox" />
                      </h3>
                    </div>
                    {shipBox && <div id="ship-box-info">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="country-select">
                            <label>Country <span className="required">*</span></label>
                            <select>
                              {countries.map((country, index) => (
                                <option key={index} defaultValue={index}>{country}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <InputBox col='col-md-6' label={'First Name'} placeholder="First Name" />
                        <InputBox col='col-md-6' label={'Last Name'} placeholder="Last Name" />
                        <InputBox required={false} label={'Company Name'} placeholder="Company Name" />
                        <InputBox label={'Street address'} placeholder="Street address" />
                        <InputBox required={false} placeholder="Apartment, suite, unit etc. (optional)" />
                        <InputBox label={'Town / City'} placeholder="Town / City" />
                        <InputBox col='col-md-6' label={'State / County'} placeholder="State / County" />
                        <InputBox col='col-md-6' label={'Postcode / Zip'} placeholder="Postcode / Zip" />
                        <InputBox col='col-md-6' type='email' label={'Email Address'} placeholder="Email Address" />
                        <InputBox col='col-md-6' label={'Phone'} placeholder="Phone" />

                      </div>
                    </div>}
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="checkout-mess" cols="30" rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index} className="cart_item">
                            <td className="product-name">
                              {item.title} <strong className="product-quantity"> × {item.quantity}</strong>
                            </td>
                            <td className="product-total text-end">
                              <span className="amount">${item.price}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td className='text-end'><span className="amount">${total}</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td className='text-end'><strong><span className="amount">${total}</span></strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="accordion" id="accordionExample">
                      {payment_accordion.map((item, index) => (
                        <div key={index} className="card">
                          <div className="card-header" id={item.id}>
                            <h5 className="mb-0">
                              <button className={`btn-link ${item.show ? '' : 'collapsed'}`}
                                type="button" data-bs-toggle="collapse"
                                data-bs-target={`#${item.target}`} aria-expanded="true"
                                aria-controls={`${item.target}`}>
                                {item.title}
                              </button>
                            </h5>
                          </div>

                          <div id={`${item.target}`} className={`collapse ${item.show ? 'show' : ''}`}
                            aria-labelledby={item.id} data-bs-parent="#accordionExample">
                            <div className="card-body">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="order-button-payment mt-20">
                      <button type="submit" className="tp-btn text-center">Place order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
};

export default CheckoutArea;



const InputBox = ({ col = 'col-md-12', required = true, label, type = 'text', placeholder }) => {
  return (
    <div className={col}>
      <div className="checkout-form-list">
        {label && <label>{label} {required && <span className="required">*</span>}</label>}
        <input required={required} type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}