import React from 'react';
import JobDetailsForm from '../forms/job-details-form';

const JobDetailsArea = ({item}) => {
  return (
    <>
      <div className="job-details-info pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6  col-lg-6">
              <div className="jobdetails">
                <div className="jobdetails__subtitle">
                  <h5 className="jb-subtitle">Ongoing</h5>
                </div>
                <div className="jobdetails__title">
                  <h4 className="job-title pb-10">{item?.title}</h4>
                  <span>Product Management</span>
                </div>
                <div className="jobdetails__paragraph">
                  <p className="pb-20">{"We're"} looking for a new Product Manager to join our 14-people Product
                    Management team. Check out our {"Team's"} expert blog here. :)
                  </p>
                  <p className="pb-30">Since last year, {"we've"} been building a new team of <b>Product Managers.</b> Our
                    goal is to build world-class products, elevate the product strategy and execution support we
                    deliver to our clients.
                  </p>
                </div>
                <div className="jobdetails__feature">
                  <ul>
                    <li> <i className="fal fa-check"></i> <span>Salary :</span> base salary + salary review every 6
                      months</li>
                    <li> <i className="fal fa-check"></i> <span>Perks : </span> + 1 000 PLN home office bonus,
                      Multisport card, private health insurance, discounts on Apple products, development
                      budget, and more!</li>
                    <li> <i className="fal fa-check"></i> <span>B2B : </span> +16 paid days off</li>
                    <li> <i className="fal fa-check"></i> <span>Required skills :</span> 2-year experience in
                      managing complex digital products; C1+ English; experience in Agile</li>
                    <li> <i className="fal fa-check"></i> <span>B2B :</span> +16 paid days off</li>
                    <li> <i className="fal fa-check"></i> <span>Location : </span> Poznań, remotely in Poland,
                      remotely in the EU </li>
                  </ul>
                </div>
                <div className="jobdetails__img">
                  <img src="/assets/img/job/job-1.jpg" alt="" />
                </div>
                <div className="jobdetails__title">
                  <h4 className="job-title pb-20">Your responsibilities :</h4>
                </div>
                <div className="jobdetails__paragraph">
                  <p className="mb-30">Our mission at Nerox is to help entrepreneurs and innovators shape the world
                    through beautiful software. We care about trust, taking ownership, and transparency. As a
                    Certified B Corporation®, we offer a safe, inclusive and productive environment for all team
                    members, and we’re always open to feedback.</p>
                </div>
                <div className="jobdetails__feature jobdetails__feature-2">
                  <ul>
                    <li> <i className="fal fa-check"></i> <span>Supporting Nerox’s clients in developing a viable
                      vision, strategy, and roadmap for their products.</span> Working on product discovery
                      and development in order to increase the {"client's"} business value.</li>
                    <li> <i className="fal fa-check"></i> <span>Gaining a deep understanding of our customers’ needs,
                      requirements, and objectives</span> through taking part in market research,
                      experimentation, user testing, implementing continuous feedback systems, and performing
                      data analysis.</li>
                    <li> <i className="fal fa-check"></i> <span>Supporting Nerox’s clients in developing a viable
                      vision, strategy, and roadmap for their products.</span> Working on product discovery
                      and development in order to increase the {"client's"} business value.</li>
                    <li> <i className="fal fa-check"></i> <span>Required skills :</span> 2-year experience in
                      managing complex digital products; C1+ English; experience in Agile</li>
                    <li> <i className="fal fa-check"></i> <span>Gaining a deep understanding of our customers’ needs,
                      requirements, and objectives</span> through taking part in market research,
                      experimentation, user testing, implementing continuous feedback systems, and performing
                      data analysis.</li>
                    <li> <i className="fal fa-check"></i> <span>Location : </span> Poznań, remotely in Poland,
                      remotely in the EU </li>
                  </ul>
                </div>
                <div className="jobdetails__title">
                  <h4 className="job-title pb-15">All About Collax </h4>
                </div>
                <div className="jobdetails__paragraph">
                  <p>Our mission at Netguru is to help entrepreneurs and innovators shape the world through
                    beautiful software. We care about trust, taking ownership, and transparency. As a Certified B
                    Corporation®, we offer a safe, inclusive and productive environment for all team members, and
                    we’re always open to feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <div className="tpcontact__form tpcontact__form-2">
                  <JobDetailsForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsArea;