import Link from 'next/link';
import React from 'react';
import ImageLightBox from '../../common/modals/image-lightbox';

const project_contents = {
  subtitle: 'Complete Project',
  title: 'Creative work.',
  shapes: [{ num: 'one', img: 'project-shape-2.png' }, { num: 'two', img: 'project-shape-3.png' },],
  project_items: [
    { img: '/assets/img/portfolio/port-10.jpg', category: 'Website' },
    { img: '/assets/img/portfolio/port-11.jpg', category: 'Website' },
    { img: '/assets/img/portfolio/port-12.jpg', category: 'Website' },
    { img: '/assets/img/portfolio/port-17.jpg', category: 'Website' },
    { img: '/assets/img/portfolio/port-10.jpg', category: 'Landing Page' },
    { img: '/assets/img/portfolio/port-17.jpg', category: 'Landing Page' },
    { img: '/assets/img/portfolio/port-10.jpg', category: 'ios App' },
    { img: '/assets/img/portfolio/port-11.jpg', category: 'ios App' },
    { img: '/assets/img/portfolio/port-11.jpg', category: 'Branding Design' },
    { img: '/assets/img/portfolio/port-12.jpg', category: 'Branding Design' },
    { img: '/assets/img/portfolio/port-17.jpg', category: 'Branding Design' },
  ]
}

const { project_items, shapes, subtitle, title } = project_contents;

const ProjectArea = () => {
  // unique category
  const categories = [...new Set(project_items.map(c => c.category))];
  // category
  const [category, setCategory] = React.useState('Website');
  // category_items
  const category_items = project_items.filter(item => item.category === category);
  // portfolioItems
  const [portfolioItems, setPortfolioItems] = React.useState(category_items);
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // images
  const images = [...new Set(portfolioItems.map(img => img.img))];
  // handleCategory
  const handleCategory = (c) => {
    setCategory(c)
    setPortfolioItems(project_items.filter(item => item.category === c))
  }
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  return (
    <>
      <div className="tp-project-area pt-120 pb-120 p-relative">
        {shapes.map((s, i) => <div key={i} className={`tp-project-shape-${s.num}`}>
          <img src={`/assets/img/project/${s.img}`} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-section-box-two text-center pb-20">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-80">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button masonary-menu">
                {categories.map((c, i) => (
                  <button key={i} className={`${c === category ? 'active' : ''}`} onClick={() => handleCategory(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid gx-45">
            {portfolioItems.map((item, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat2 cat3">
                <div className="tp-project-item-two p-relative mb-45">
                  <div className="project-one fix">
                    <img className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-project-icon-two">
                    <button onClick={() => handleImagePopup(i)} className="popup-image"><i
                      className="fas fa-long-arrow-up"></i></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-project-button text-center mt-25">
                <Link href="/portfolio">
                  <a className="tp-btn">View All Work</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default ProjectArea;