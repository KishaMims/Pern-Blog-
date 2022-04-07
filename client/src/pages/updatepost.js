import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


function UpdatePost() {
    const [title, setTitle] = useState('');
    const [recipecontent, setRecipeContent] = useState('');
    const [textcontent, setTextContent] = useState('');
    const [category, setCategory] = useState('');

    const { id } = useParams();
    console.log(id);

    const { data: blog, error } = useFetch(`http://localhost:5000/blogs/${id}`);
    console.log(blog);
    const navigate = useNavigate();


    // const handleOnSubmit = () => {
    //     fetch(`http://localhost:5000/blogs/${id}`,{
    //     method: 'PUT'
    //     }).then(()=> {
    //     const newBlog = { title, recipecontent, textcontent, category };
    //     navigate('/blogs')
    //     })
    //   }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const updatePost = {
            title: title === '' ? blog.title : title,
            recipecontent: recipecontent === '' ? blog.recipecontent : recipecontent,
            textcontent: textcontent === '' ? blog.textcontent : textcontent,
            category: category === '' ? blog.category : category
        };
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatePost)
        }).then(() => {
            navigate('/blogs');
        })
    }

    // const handleOnSubmit = async (e) => {
    //     const blog = { title, recipecontent, textcontent, category };
    //     e.preventDefault();
    //     const UpdatedPost = await blog.put(`/blogs/${id}/update/`, {
    //       title,
    //       textcontent,
    //       recipecontent,
    //       category
    //       ,
    //     });
    //     navigate.push("/blogs");
    //   };


    return (
        <div className='update-blog-post'>
            {error && <div>{error}</div>}
            <h1>Update Blog Post Here</h1>
            <form onSubmit={handleOnSubmit}>
                {blog && (
                    <fieldset>
                        <label>Blog Title</label>
                        <input
                            type="text"
                            id="add-blog-title"
                            placeholder=""
                            required
                            defaultValue={blog.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Text Content</label>
                        <input
                            type="text"
                            id="add-text-content"
                            placeholder=""
                            required
                            defaultValue={blog.textcontent}
                            onChange={(e) => setTextContent(e.target.value)}
                        />
                        <label>Recipe Content</label>
                        <input
                            type="text"
                            id="add-recipe-content"
                            placeholder=""
                            required
                            defaultValue={blog.recipecontent}
                            onChange={(e) => setRecipeContent(e.target.value)}
                        />
                        <label>Add Category</label>
                        <input
                            type="text"
                            id="add-category-content"
                            placeholder=""
                            required
                            defaultValue={blog.category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </fieldset>
                )}
                <button type="submit">Update Blog Post</button>
            </form>
        </div>
    )
}


export default UpdatePost;