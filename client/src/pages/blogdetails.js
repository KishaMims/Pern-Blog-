import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { confirmAlert } from 'react-confirm-alert';
import moment from "moment";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";



function BlogDetails() {
const { id } = useParams();
console.log(id);
const { data: blog, error } = useFetch(`http://localhost:5000/blogs/${id}`);
console.log(blog);
const navigate = useNavigate();


  // confirmAlert = () => ({
  //     title: 'Confirm to submit',
  //     message: 'Are you sure you want to do this?',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick = () => {
  //           fetch(`http://localhost:5000/blogs/${id}`,{
  //           method: 'DELETE'
  //           }).then(()=> {
  //           navigate('/home')
  //           }
  //           ,
  //       {
  //         label: 'No',
  //         onClick: () => alert('Click No')
  //       }
  //     ]),
  //   }

const handleOnClick = () => {
    fetch(`http://localhost:5000/blogs/${id}`,{
    method: 'DELETE'
    }).then(()=> {
    navigate('/home')
    })
//     // confirmAlert({
//     //   title: 'Confirm to submit',
//     //   message: 'Are you sure to do this.',
//     //   buttons: [
//     //     {
//     //       label: 'Yes',
//     //       onClick: () => alert('Click Yes') 
//     //     },
//     //     {
//     //       label: 'No',
//     //       onClick: () => alert('Click No')
//     //     }
     
//     //   ]
//     // });
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
                <div>{ blog.textcontent }</div>
                <div> { blog.recipecontent }</div>
                <div> { blog.category }</div>
                <button className="delete" onClick={handleOnClick}>Delete Post<AiTwotoneDelete/></button><br/>
                <button className="update" onClick={handleClick}>Update Post<AiFillEdit/></button>
            </article>
        )}
    </div>
  )
}


export default BlogDetails;