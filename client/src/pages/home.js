import React from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";



function Home () {
    const {data: blogs, error} = useFetch('http://localhost:5000/blogs');
    return (
        <div className="homepage">
            {error && <div>{error}</div>}
            <div>
                <h2 className="HomeTitle"> Recent Blog Post </h2>
            <BlogList blogs={ blogs } title='All Blogs'/>
            </div>
        </div>
    )
}

export default Home;