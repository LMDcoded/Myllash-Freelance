import Link from 'next/link';
import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import BlogDetailsForm from '../forms/blog-details-form';

const post_comments = [
  {
    date:'3/05/2022, 3:53:39 PM',
    img:'/assets/img/testimonial/testi-4.2.png',
    name:'Kristin Watson',
    desc:"Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor."
  },
  {
    children:true,
    date:'5/09/2022, 3:59:39 PM',
    img:'/assets/img/testimonial/testi-4.5.png',
    name:'Farhan Firoz',
    desc:"Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
  },
  {
    date:'8/10/2022, 5:59:39 PM',
    img:'/assets/img/testimonial/testi-4.1.png',
    name:'Salim rana',
    desc:"Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
  },
]

const BlogDetailsArea = ({ blog }) => {
  const { img, author, date, comment, views, title } = blog || {};
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    <p><img className="w-100" src={img} alt="" /></p>
                    <div className="postbox__meta">
                      <span><a href="#"><i className="fal fa-user-circle"></i>{author}</a></span>
                      <span><a href="#"><i className="fal fa-clock"></i>{date}</a></span>
                      <span><a href="#"><i className="fal fa-comment-alt-lines"></i>({comment}) Coments</a></span>
                      <span><a href="#"><i className="fal fa-eye"></i> {views} views</a></span>
                    </div>
                    <h3 className="postbox__title">
                      {title}
                    </h3>
                    <div className="postbox__text">
                      <p>One in four people in the world will be affected by mental or neurological disorders at some point in their lives, says the World Health Organization. Still, we spend more time brushing our teeth than taking care of our mental health, said Guy Winch in his TED talk.
                      </p>
                      <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years.</p>

                      <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years.</p>
                    </div>

                    <div className="postbox__thumb2">
                      <div className="row gx-50">
                        <div className="col-xl-6">
                          <p><img src="/assets/img/blog-details/blog-big-4.jpg" alt="" /></p>
                        </div>
                        <div className="col-xl-6">
                          <p><img src="/assets/img/blog-details/blog-sm-5.jpg" alt="" /></p>
                        </div>
                      </div>
                    </div>
                    <div className="postbox__social-wrapper">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="postbox__tag tagcloud">
                            <span>Tag</span>
                            <Link href="/blog-details">
                              <a>Business</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>Design</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>apps</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>data</a>
                            </Link>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="postbox__social text-xl-end text-start">
                            <span>Share</span>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-linkedin tp-linkedin"></i>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-pinterest tp-pinterest"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook tp-facebook" ></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-twitter tp-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">(04) Comment</h3>
                  <ul>
                    {post_comments.map((comment,i) => {
                      const {date,desc,img,name,children} = comment;
                      return  <li key={i} className={`${children ? 'children' : ''}`}>
                      <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info ">
                          <div className="postbox__comment-avater mr-20">
                            <img src={img} alt="" />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-name">
                            <h5>{name}</h5>
                            <span className="post-meta">{date}</span>
                          </div>
                          <p>{desc}</p>
                          <div className="postbox__comment-reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    })}
                   
                  </ul>
                </div>
                <div className="postbox__comment-form">
                  <h3 className="postbox__comment-form-title">Leave a Reply</h3>
                  {/* details form start */}
                  <BlogDetailsForm />
                  {/* details form end */}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              {/* blog sidebar start */}
              <BlogSidebar />
              {/* blog sidebar end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;