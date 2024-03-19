import Link from 'next/link';
import React from 'react';

const newsLatter_contents = {
  img: '/assets/img/news/news-2.png',
  subtitle: 'Need a Project ?',
  title: "Let's work together. fixed a meeting",
  btn_text: 'Fixed a Meeting',
  bg_img: '/assets/img/news/shape-3.png',
}
const { bg_img, btn_text, img, subtitle, title } = newsLatter_contents;

const NewsLetter = () => {
  return (
    <>
      <div className="tp-news-area black-bg fix">
        <div className="container">
          <div className="row align-items-end flex-wrap-reverse flex-md-wrap">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-newsletter-left-img pt-60 p-relative wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="z-index"> <img src={img} alt="" /></div>
                <div className="news-shape-img">
                  <img src="/assets/img/creative/creative-circle-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-news-letter-section-box-two pt-135 pb-145 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title tp-white-text pb-10">{title}</h2>
                <Link href="/contact">
                  <a className="tp-btn-border">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-news-letter-area">
        <div className="tp-suscribe-newslatter theme-bg pt-60 pb-60" style={{ backgroundImage: `url(${bg_img})`, backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-newsletter-title">
                  <h3 className="tp-news-title">Subscribe newsletter</h3>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-news-button p-relative">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Enter your mail" />
                    <button className="tp-submit-button tp-btn-yellow" type="submit">Subscribe <i
                      className="far fa-arrow-right"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;