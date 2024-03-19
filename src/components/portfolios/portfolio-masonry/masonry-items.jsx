import Link from 'next/link';
import React, { useState } from 'react';
import { portfolio_data } from '../../../data';

const project_items = portfolio_data.filter(item => item.portfolio_masonry);
const categories = [...new Set(project_items.map(item => item.category))]
const imagePerRow = 4;

const MasonryItems = () => {
  const [category, setCategory] = useState('Website');
  const categoryItems = project_items.filter(item => item.category === category);
  const [items, setItems] = useState(categoryItems);
  const [next, setNext] = useState(imagePerRow);
  // handleCategoryItems
  const handleCategoryItems = (category) => {
    setCategory(category);
    setNext(imagePerRow)
    const filtering_category_items = project_items.filter(item => item.category === category);
    setItems(filtering_category_items)
  }
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  return (
    <>
      <div className="tp-project-area tp-cc-project pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center mb-70">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button masonary-menu">
                {categories.map((c, i) => (
                  <button key={i} className={c === category ? "active" : ''}
                    onClick={() => handleCategoryItems(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {items?.slice(0, next)?.map((item) => {
              const { id, img, title, big, subtitle } = item;
              return <div key={id} className={`${big ? 'col-xl-8 col-lg-8 col-md-12' : 'col-xl-4 col-lg-4 col-md-6'}`}>
                <div className="tp-project-item-four mb-30">
                  <div className="tp-project-item-four__img fix">
                    <Link href={`/portfolio-details/${id}`}>
                      <a><img className="w-100" src={img} alt="" /></a>
                    </Link>
                  </div>
                  <div className="tp-project-item-four__bg">
                    <div className="tp-project-item-four__bg-info">
                      <h3 className="tp-project-title">
                        <Link href={`/portfolio-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <h5 className="tp-project-subtitle">{subtitle}</h5>
                    </div>
                  </div>
                </div>
              </div>
            })}
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
    </>
  );
};

export default MasonryItems;