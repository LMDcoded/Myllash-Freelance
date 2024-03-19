import Link from 'next/link';
import React from 'react';

const contents = {
  shapes: [
    'bp-chose-5.1.png',
    'bp-chose-5.2.png',
    'bp-chose-5.3.png',
  ],
  feature_bg: '/assets/img/feature/fea-2.png',
  subtitle: 'Why Choose us',
  title: 'We provide the best',
  highlight_text: 'solution for',
  text_1: 'By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most appropriate methods and sesources.',
  text_2: 'At collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing.',
  btn_text: 'About Collax'
}

const { btn_text, feature_bg, highlight_text, shapes, subtitle, text_1, text_2, title } = contents;

const FeatureArea = () => {
  return (
    <div className="tp-chose-area pt-190 pb-130 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-chose-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/chose/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="tpchosebox-main p-relative">
              <div className="tp-chose-bg">
                <img src={feature_bg} alt="" />
              </div>
              <div className="row gx-40 align-items-center tp-chose-space">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft"
                  data-wow-duration=".3s" data-wow-delay=".5s">
                  <div className="tp-chose-item mb-40">
                    <div className="tpchosebox">
                      <div className="tpchosebox__icon mb-30">
                        <a href="#"><i className="flaticon-group"></i></a>
                      </div>
                      <div className="tpchosebox__content">
                        <h4><a href="#">Professional <br /> Team</a></h4>
                        <p>24+ Team Member</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="tp-chose-item">
                    <ChoseItem item_num={'two'} m={'mb-40'} icon={'flaticon-web'} color="4"
                      title={<>Cretified <br /> Globally</>} text="65.04 k Reach" />
                    <ChoseItem item_num={'three'} icon={'fas fa-star'} color="5"
                      title={<>Competitive <br /> Rate</>} text="100% Client Satisfied" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".9s">
            <div className="tp-feature-section-title-box">
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60" />
                  </svg>
                </span>
                your business development</h2>
              <p className="pb-25">{text_1}</p>
              <p className="pb-20">{text_2}</p>
              <div className="tp-fea-button-five">
                <Link href="/contact">
                  <a className="tp-btn-sky">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;

const ChoseItem = ({ item_num, m, icon, title, text, color }) => {
  return (
    <div className={`tpchosebox tpchosebox-${item_num} ${m && 'mb-40'} wow tpfadeIn`}
      data-wow-duration=".5s" data-wow-delay=".7s">
      <div className={`tpchosebox__icon fea-color-${color} mb-30`}>
        <a href="#"><i className={icon}></i></a>
      </div>
      <div className="tpchosebox__content">
        <h4><a href="#">{title}</a></h4>
        <p>{text}</p>
      </div>
    </div>
  )
}