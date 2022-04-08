/* eslint-disable spaced-comment */
/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js');
// const { resourceLimits } = require('worker_threads');

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/home', (req, res) => {
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
    try {
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.get('/blogs/:id', cors(), async (req, res) => {
    const { id } = req.params;
    // const STUDENTS = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },

    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(STUDENTS);
    try {
        const posts = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
        res.json(posts.rows[0]);
    } catch (e) {
        return res.status(400).json({ e });
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
app.post('/blogs', async (req, res) => {
    try {
        //await
        // console.log(req.body);;
        const { title, textcontent, recipecontent, category } = req.body;
        const newBlogPost = await db.query(
            "INSERT INTO posts (title, recipecontent, textcontent, category) VALUES ($1,$2,$3,$4) RETURNING *", [title, recipecontent, textcontent, category]
        );
        res.json(newBlogPost.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})



app.delete('/blogs/:id', async (req, res) => {

    //await
    // console.log(req.body);;
    const { id } = req.params
    try {
        const deletePost = await db.query("DELETE FROM posts WHERE id = $1", [id])
        res.send(deletePost);
        res.json('Blog post was deleted!');
    } catch (error) {
        console.log(error.message);
    }
})
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//     const studentId = req.params.studentId;
//     const updateStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname }
//     //console.log(req.params);
//     // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
//     console.log(studentId);
//     console.log(updateStudent);
//     const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id = ${studentId} RETURNING *`;
//     console.log(query);
//     const values = [updateStudent.lastname, updateStudent.firstname];
//     try{
//         const updated = await db.query(query, values);
//         console.log(updated.rows[0]);
//         res.send(updated.rows[0]);
//     } catch (e){
//         console.log(e);
//         return res.status(400).json({e});
//     }
// });

//title=E'${updatePost.title}',

app.put('/blogs/:id/', async (req, res) => {
    const { id } = req.params;
    const updatePost = { id: req.body.id, title: req.body.title, textcontent: req.body.textcontent, recipecontent: req.body.recipecontent, category: req.body.category }
    //    const updatePost = await db.query("UPDATE posts SET title=$1, textcontent=$2, recipecontent=$3 category=$4 WHERE id = $4 returning *",
    //    [req.body.title, req.body.textcontent, req.body.recipecontent, req.body.category, req.params.id]
    //  );
    console.log(req.body);
    const query = `UPDATE posts SET title=$1, textcontent=$2, recipecontent=$3, category=$4 WHERE id=${id} RETURNING *`;
    // const values = [updatePost.title, updatePost.textcontent, updatePost.recipecontent, updatePost.category];
    try {
        console.log(query);
        const updated = await db.query(query, [updatePost.title, updatePost.textcontent, updatePost.recipecontent, updatePost.category]);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// app.put('/blogs/:id/update',async (req,res) => {
//     try {
//         const {id} = req.params // WHERE
//         const {title, textcontent, recipecontent, category} = req.body //SET

//         const updatePost = await db.query("UPDATE posts SET title, textcontent, recipecontent, category = $1 WHERE id = $2",[title, textcontent, recipecontent, category, id])
//         res.json('Post was updated');
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});