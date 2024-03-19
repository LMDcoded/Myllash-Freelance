import React from 'react';
import { FeatureOne, FeatureThree, FeatureTwo } from '../../../svg';

const feature_contents = {
  feature_img:'/assets/img/feature/fea-1.png',
  subtitle:'Why Choose us',
  title:'Specialist in aviding clients of financial',
  highlight_text:'challenges',
  feature_lists:[
    {
      id:1,
      icon:<FeatureOne/>,
      title:'Fast working process',
      subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
    },
    {
      id:2,
      icon:<FeatureTwo/>,
      title:'Dedicated team',
      subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
    },
    {
      id:3,
      icon:<FeatureThree/>,
      title:'24/7 hours support',
      subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
    },
  ]
}

const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

const FeatureArea = () => {
  return (
    <div className="tp-feature-arae pt-130 pb-100 p-relative">
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
            <div className="tp-fea-img">
              <img src={feature_img} alt=""/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10">{subtitle}</h5>
                <h2 className="tp-title-sm pb-40">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                {feature_lists.map((list,i) => {
                  const {icon,id,subtitle,title} = list;
                  return <div key={id} className="tp-feature-list d-flex">
                  <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
                    {icon}
                  </div>
                  <div className="tp-feature-list__content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;