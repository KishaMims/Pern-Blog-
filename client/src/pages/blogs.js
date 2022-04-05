import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


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
    <div>
      <h1>Blogs</h1>
      <ul>
      {blogs.map((blog, index) =>
      <li key={index}>
        {blog.title} {blog.textcontent} {blog.recipecontent} {blog.postdate} {blog.category}
      </li>)}
      </ul>
      <Link to="/create-new-blog-post">Create Blog</Link>
    </div>
  )
}


export default Blogs;