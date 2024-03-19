import React from 'react';
import AboutForm from '../forms/about-form';

const AboutContact = () => {
  return (
    <div className="am-contact-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="am-contact-info p-relative">
              <div>
                <h4 className="am-contact-title">Direct massage me!</h4>
              </div>
              <div className="am-border-shape">
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form text-center">
              <AboutForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;