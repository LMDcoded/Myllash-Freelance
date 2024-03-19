import React from 'react';

function SinglePrice({active=false,title,price,sm_title,lists }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
      <div className={`cpprice ${active?'active':''} text-center mb-20`}>
        <div className="cpprice__title">
          <h3 className="cp-price-title">{title}</h3>
        </div>
        <div className="cpprice__meta">
          <span><b>${price}</b>/ months</span>
        </div>
        <div className="cpprice__title-sm">
          <h4 className="cp-price-sm-title">{sm_title}</h4>
        </div>
        <div className="cpprice__list">
          <ul>
            {lists && lists.map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="cpprice__button">
          <button className="tp-btn-yellow">Get Started Today <i className="fal fa-long-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}

const PriceArea = () => {
  return (
    <>
      <div className="cp-price-area pt-130 pb-130">
        <div className="container">
          <div className="row tp-gx-15">
            <SinglePrice title={'Professional'} price={29} 
            sm_title={'You can choose to pay monthly annually. Don’t worry! You can.'} 
            lists={['09 page responsive website','5 PPC Campaigns','10 SEO Keywords','5 Facebook Campaigns']} />

            <SinglePrice title={'Standard'} price={49} active={true}
            sm_title={'You can choose to pay monthly annually. Don’t worry! You can.'} 
            lists={['09 page responsive website','5 PPC Campaigns','10 SEO Keywords','5 Facebook Campaigns']} />

            <SinglePrice title={'Ultimate'} price={99}
            sm_title={'You can choose to pay monthly annually. Don’t worry! You can.'} 
            lists={['09 page responsive website','5 PPC Campaigns','10 SEO Keywords','5 Facebook Campaigns']} />
 
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;