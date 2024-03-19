import React from 'react';

const ProjectInfoArea = ({item}) => {
  return (
    <>
    <div className="cd-project-info-area pb-100">
      <div className="container">
        <div className="cd-project-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                <h4 className="cd-case-title">{item?.title}</h4>
                <p>A dedicated product design team can help you achieve your business goals. Whether you need to
                  craft an idea for a completely new product or elevate the quality of an existing solution,
                  we’ll help you to create a product that is laser targeted to your users’ needs and delivers
                  business results.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="cd-client-details">
                <p><span>Client :</span> Rasalina De Willam (USA)</p>
                <p><span>Date :</span> March 21, 2020</p>
                <p><span>Category :</span> Technology</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <div className="cd-social-icon">
                <a className="cd-si-color-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="cd-si-color-2" href="#"><i className="fab fa-pinterest-p"></i></a>
                <a className="cd-si-color-3" href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectInfoArea;