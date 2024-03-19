import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightTwo } from '../../../svg';
import VideoModal from '../../common/modals/modal-video';

const hero_contents = {
  shapes: [{ img: 'hero-shape-4' }, { num: '-two', img: 'hero-shape-4.1' }],
  title: <>Building Digital <span className="tp-highlight"> <HighlightTwo /> <i>Product,</i></span> Brand and Experience</>,
  text: 'At collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency',
  btn_text: 'How it Works',
  video_title: 'Behind the scenes',
  video_id: 'LJbkLdtEW00',
  social_links: [
    { id: 1, icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook',link: 'http://facebook.com' },
    { id: 3, icon: 'fab fa-youtube social-icon-3', title: 'Youtube',link: 'https://www.youtube.com/' },
    { id: 2, icon: 'fab fa-twitter social-icon-2', title: 'Twitter',link: 'http://twitter.com' },
  ],
  hero_img: '/assets/img/hero/hero-5.png'
}

const { btn_text, hero_img, shapes, social_links, text, title, video_id, video_title } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area-two  pt-130 p-relative fix">
        <div className="tp-hero-yellow-shape d-none d-lg-block"></div>
        {shapes.map((s, i) => <div key={i} className={`ce-hero-shape${s.num ? s.num : ''} d-none d-lg-block`}>
          <img src={`/assets/img/hero/${s.img}.png`} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-120 pb-140">
                <h3 className="tp-hero-bd-title text-black wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  {title}
                </h3>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">{text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <Link href="/about">
                    <a className="tp-btn mr-55">{btn_text}</a>
                  </Link>
                  <div className="tp-hero-paly-button-four">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i> <span>{video_title}</span></button>
                  </div>
                </div>
              </div>
              <div className="tp-hero-social pb-90 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                <div className="tp-hero-social bp-hero-social">
                  {social_links.map((l, i) => (
                    <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                      <i className={l.icon}></i><span>{l.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".9s">
              <div className="tp-hero-right-img-four pt-90">
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;