import Link from 'next/link';
import React, { useState } from 'react';
import { portfolio_data } from '../../../data';
import { PopupArrowTwo } from '../../../svg';
import ImageLightBox from '../../common/modals/image-lightbox';

const portfolio_contents = {
  subtitle: 'Complete Project',
  title: 'Creative work.',
  project_items: portfolio_data.filter(item => item.portfolio_2),
}
const { subtitle, title, project_items } = portfolio_contents;
const imagePerRow = 4;


const PortfolioItems = () => {
  // category
  const [category, setCategory] = useState('Website');
  // category items
  const cate_items = project_items.filter(item => item.category === category);
  // items
  const [items, setItems] = useState(cate_items);
  // load next state
  const [next, setNext] = useState(imagePerRow);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  // images 
  const images = items.map(img => img.img);
  // all categories 
  const all_categories = [...new Set(project_items.map(c => c.category))];
  // handleCategory
  const handleCategory = (category) => {
    setNext(imagePerRow)
    setCategory(category)
    setItems(project_items.filter(item => item.category === category))
  }
  return (
    <React.Fragment>
      <div className="tp-project-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-section-box-two text-center">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-80">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button masonary-menu">
                {all_categories.map((c, i) => (
                  <button key={i} className={`${c === category ? 'active' : ''}`}
                    onClick={() => handleCategory(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid gx-45">
            {items?.slice(0, next)?.map((item, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="tp-project-item-two p-relative mb-45 fix">
                  <div className="portfolio-thumb fix">
                    <img className=" w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-portfolio-content-box">
                    <h3 className="portfolio-animation-title">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className="portfolio-animation-icon">
                    <button className="popup-image" onClick={() => handleImagePopup(i)}>
                      <PopupArrowTwo />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {next < items.length && <div className="row">
            <div className="col-12">
              <div className="tp-project-button text-center mt-25">
                <button onClick={handleLoadData} className="tp-btn-yellow">Lode more</button>
              </div>
            </div>
          </div>}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </React.Fragment>
  );
};

export default PortfolioItems;