import React from 'react';
//import {useFetch, useParams } from "./useFetch";
//import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

function Search() {
    const [blogs, setBlogs] = useState([]);
    const [foundBlogs, setFoundBlogs] = useState(blogs);
    const [category, setCategory] = useState('');
    //const navigate = useNavigate();
    
     useEffect(() => {
        fetch('http://localhost:5000/blogs')
           .then((response) => response.json())
           //.then(response => response.text())
            .then(blogs => {
                setBlogs(blogs);
            }

            )

    }, []);
    
    
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = blogs.filter((blog) => {
                return blog.category.toLowerCase().startsWith(keyword.toLowerCase());

            });

            setFoundBlogs(results);

        } else {


            setFoundBlogs(blogs)

        }

        setCategory(keyword);

    };


  return (
    <div>Search
    <div className="foundcontact">
    <input
        type="search"
        value={category}
        onChange={filter}
        className="input"
        placeholder="🔍 Search"
    />
<div className="contact-list">
    {foundBlogs&& foundBlogs.length > 0 ? (
        foundBlogs.map((blogs, index) => (
            <li className='search' key={index}> <br/>
            <span className="blog-title">{blogs.title}</span> <br/><br/>
             <span className="blog-textcontet">{blogs.textcontent}</span> <br /><br/>
             <span className="blog-recipecontet">{blogs.recipecontent}</span><br /><br/>
             <span className="blog-postdate"> Posted: {moment(blogs.postdate).format('MM/DD/YYYY')}</span> <br /><br/>
             <span className="blog-category">Notes: {blogs.category}</span><br />
             </li>
        ))
    ) : (
    <h1>No Results Found</h1>
    )}
</div>
</div>
</div>
);

}




export default Search;