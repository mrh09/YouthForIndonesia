import React from 'react';
import './BlogComp.css'
// import BlogData from '../BlogData';

const BlogComp = (props) => {
  let { img, category, title, dates } = props.data

  return (
    <>
      <div className="blog">
        <div className="blog-container">
          <div className="card-blog">
            <div className="card-image">
              <span className='category-tag'>{category}</span>
              <img src={img} alt={title} />
            </div>
            <div className="card-content">
              <p>{dates}</p>
              <h4>{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogComp;