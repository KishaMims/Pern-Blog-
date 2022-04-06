import { Link } from 'react-router-dom';
import React from 'react';


function BlogList({ blogs }) {
  return ( 
    <div className='blog-list'>
    {blogs.map(blog => (
      
       <div className='blog-preview' key={blog.id}>
           <Link to={`/blogs/${blog.id}`}>
               <h2>{blog.title}</h2> 
               <p>Posted{blog.postdate}</p>
               </Link>
               </div>
    ))}
    </div>
  )
}


export default BlogList;