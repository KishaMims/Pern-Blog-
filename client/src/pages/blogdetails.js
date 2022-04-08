import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


function BlogDetails() {
const { id } = useParams();
console.log(id);
const { data: blog, error } = useFetch(`http://localhost:5000/blogs/${id}`);
console.log(blog);
const navigate = useNavigate();

const handleOnClick = () => {
    fetch(`http://localhost:5000/blogs/${id}`,{
    method: 'DELETE'
    }).then(()=> {
    navigate('/home')
    })
}

const handleClick = () => {
  navigate(`/blogs/${id}/update`)
}

  return (
    <div className="container-fluid">
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h1>{blog.title}</h1>
                <p>Posted { blog.postdate }</p>
                <div>{ blog.textcontent }</div>
                <div> { blog.recipecontent }</div>
                <div> { blog.category }</div>
                <button onClick={handleOnClick}>Delete Post</button>
                <button onClick={handleClick}>Update Post</button>
            </article>
        )}
    </div>
  )
}


export default BlogDetails;