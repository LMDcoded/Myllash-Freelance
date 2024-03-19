import React from 'react';
import blog_data from '../../data/blog-data';
import BlogSidebar from './blog-sidebar';
import BlogItems from './blog-items';

// blog_items
const blog_items = blog_data.filter(blog => blog.blog_page);

const BlogArea = () => {

  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {/*BlogItems start  */}
                <BlogItems itemsPerPage={2} items={blog_items} />
                {/*BlogItems end  */}
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

export default BlogArea;