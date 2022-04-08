import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [recipecontent, setRecipeContent] = useState('');
    const [textcontent, setTextContent] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    //create functions that handle the event of the user typing into the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, recipecontent, textcontent, category };
        fetch('http://localhost:5000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/blogs');
        })
    }

   
    return (
        <div>
            <h1>Add New Blog Post Here</h1>
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <label>Blog Title</label>
                    <input
                        type="text"
                        className="add-blog-title"
                        placeholder=""
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Text Content</label>
                    <input
                        type="text"
                        id="add-text-content"
                        placeholder=""
                        required
                        value={textcontent}
                        onChange={(e) => setTextContent(e.target.value)}
                    />
                    <label>Recipe Content</label>
                    <input
                        type="text"
                        id="add-recipe-content"
                        placeholder=""
                        required
                        value={recipecontent}
                        onChange={(e) => setRecipeContent(e.target.value)}
                    />
                    <label>Add Category</label>
                    <input
                        type="text"
                        id="add-category-content"
                        placeholder=""
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </fieldset>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default Create;