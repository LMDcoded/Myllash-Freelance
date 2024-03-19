import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-1.png',
    name: 'Darrell Steward',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Myllash was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.'
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-2.jpg',
    name: 'Floyd Miles',
    title: 'CEO of (Orix)',
    ratings: [1, 2, 3, 4],
    desc: 'Myllash was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.'
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-3.png',
    name: 'Albert Flores',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Myllash was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.'
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-1.png',
    name: 'Darrell Steward',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Myllash was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.'
  },
]

const testimonial_2_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-4.jpg',
    name: 'Darrell Steward',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service"
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-5.jpg',
    name: 'Floyd Miles',
    title: 'CEO of (Orix)',
    ratings: [1, 2, 3, 4],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service"
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-6.jpg',
    name: 'Albert Flores',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service"
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-5.jpg',
    name: 'Darrell Steward',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service"
  },
]

const Testimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  const [sliderLoopTwo, setSliderLoopTwo] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  React.useEffect(() => setSliderLoopTwo(true), []);
  return (
    <React.Fragment>
      <div className="tp-testimonial-area black-bg pt-130 pb-130 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonial</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}
            <Swiper
              loop={sliderLoop}
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20"><img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Swiper
              loop={sliderLoopTwo}
              slidesPerView={1}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active-2"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_2_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20">
                          <img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;