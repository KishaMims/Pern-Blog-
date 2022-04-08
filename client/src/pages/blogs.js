import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';


function Blogs() {

const [blogs, setBlogs] = useState([]);
    //const [updatecontact, setUpdatedcontact]= useState(contacts);
    //const [editdedContact, setEditedContact] = useState(contacts);
    
        useEffect(() => {
            fetch('http://localhost:5000/blogs')
               .then((response) => response.json())
               //.then(response => response.text())
                .then(blogs => {
                    setBlogs(blogs);
                }
    
                )
    
        }, []);

        // const addBlog = (blog) => {
        //   setBlogs((blog) => [...blogs, blog]);
        // }
    

  return (
    <div className='blog-list'>
      <h1>Blogs</h1>
      <ul>
      {blogs.map((blog, index) =>
      <li className='list' key={index}> <br /> 
        <h2>{blog.title}</h2><br /> {blog.textcontent}<br /> {blog.recipecontent} <br /> Blog Posted: {moment(blog.postdate).format('MM/DD/YYYY')} <br /> {blog.category}
      </li>)}
      </ul>
      <Link className='blog-link' to="/create-new-blog-post">Create Blog</Link>
    </div>
  )
}


export default Blogs;

