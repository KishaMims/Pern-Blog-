import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
// import { confirmAlert } from 'react-confirm-alert';
import moment from "moment";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function BlogDetails() {
  const { id } = useParams();
  console.log(id);
  const { data: blog, error } = useFetch(`http://localhost:5000/blogs/${id}`);
  console.log(blog);
  const navigate = useNavigate();



  const MySwal = withReactContent(Swal);

  const handleOnClick = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/blogs/${id}`, {
          method: 'DELETE'
        }).then(() => {
          navigate('/home')
        })
      }
    })
    //    fetch(`http://localhost:5000/blogs/${id}`,{
    //   method: 'DELETE'
    //   }).then(()=> {
    //   navigate('/home')
    //   })
  };




  const handleClick = () => {
    navigate(`/blogs/${id}/update`)
  }

  return (
    <div className="container-fluid">
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Posted {moment(blog.postdate).format('MM/DD/YYYY')}</p>
          <div>{blog.textcontent}</div>
          <div> {blog.recipecontent}</div>
          <div> {blog.category}</div>
          <button className="delete" onClick={handleOnClick}>Delete Post<AiTwotoneDelete /></button><br />
          <button className="update" onClick={handleClick}>Update Post<AiFillEdit /></button>
        </article>
      )}
    </div>
  )
}


export default BlogDetails;