const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/blogs', cors(), async (req, res) => {
    // const STUDENTS = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(STUDENTS);
    try{
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e){
        return res.status(400).json({e});
    }
});

app.get('/blogs/:id', cors(), async (req, res) => {
    const {id} = req.params;
    // const STUDENTS = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },

    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(STUDENTS);
    try{
        const posts = await db.query('SELECT * FROM posts WHERE id = $1',[id]);
        res.json(posts.rows[0]);
    } catch(e){
        return res.status(400).json({e});
    }
});

//create the POST request
// app.post('/api/blogs', cors(), async (req, res) => {
//     const newUser = { firstname: req.body.firstname, lastname: req.body.lastname }
//     console.log([newUser.firstname, newUser.lastname]);
//     const result = await db.query(
//         'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//         [newUser.firstname, newUser.lastname]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });
app.post('/blogs',async(req,res) => {
    try {
        //await
        // console.log(req.body);;
        const {title, textcontent, recipecontent, category} = req.body;
        const newBlogPost = await db.query(
            "INSERT INTO posts (title, recipecontent, textcontent, category) VALUES ($1,$2,$3,$4) RETURNING *",[title, recipecontent, textcontent, category]
        );
            res.json(newBlogPost.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})



app.delete('/blogs/:id',async(req,res) => {
    
        //await
        // console.log(req.body);;
       const {id} = req.params
       try {
       const deletePost = await db.query("DELETE FROM posts WHERE id = $1",[id])
       res.send(deletePost);
       res.json('Blog post was deleted!');
    } catch (error) {
        console.log(error.message);
    }
})
// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});