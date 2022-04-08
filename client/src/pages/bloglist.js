import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

function BlogList({ blogs }) {
  return ( 
    
    <div className="blog-list">
    {blogs.map(blog => (
          
       <div className="card-body" key={blog.id}>
           <Link to={`/blogs/${blog.id}`}>
               <h2 className="card-title">{blog.title}</h2> 
               <p clasName="card-text">Posted {moment(blog.postdate).format('MM/DD/YYYY')}</p>
               </Link>
               </div>
             
    ))}
    </div>  
  )
}


export default BlogList;