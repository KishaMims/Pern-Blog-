import React from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";


function Home () {
    const {data: blogs, error} = useFetch('http://localhost:5000/blogs');
    return (
        <div className="homepage">
            <h1>
                Sip Me Baby One More Time 
            </h1>
            <p>🍷🍹When it comes to a drink? I'm gonna have it🍷🍹</p>
            <p>So I decied to share my favorties ones with you here</p>
            {error && <div>{error}</div>}
            <BlogList blogs={ blogs } title='All Blogs'/>
        </div>
    )
}

export default Home;