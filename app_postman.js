const express = require('express');
const pool=require('./database');
// const createApplication = require('express/lib/express'); //
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');
// app.use( express.static( "public" ) ); 
app.use(express.json()); 

// listen for requests on port 3000
app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});

/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */

// retrieve all posts
app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
        "SELECT * FROM nodetable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
   });

   // retrieve a specific post
app.get('/posts/:id', async(req, res) => {
    try {
        console.log("get a post request has arrived");
        const posts = await pool.query(
        "SELECT * FROM nodetable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
   });

   // add a new post
app.post('/posts/', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
        "INSERT INTO nodetable(title, body, urllink) values ($1, $2, $3) RETURNING*", [post.title, post.body, post.urllink]
        );
        res.json( newpost );
    } catch (err) {
        console.error(err.message);
    }
   });

   // update the post in db
app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
        "UPDATE nodetable SET (title, body, urllink) = ($2, $3, $4) WHERE id = $1", [id, post.title, post.body, post.urllink]
         );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
   });

   // delete a post from the db
app.delete('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
        "DELETE FROM nodetable WHERE id = $1", [id]
        );
        res.json(post);
 } catch (err) {
    console.error(err.message);
 }
});


//A   
app.get('/', (req, res) => {
/* default to the posts page, since no other usefull content */
 res.render('posts');
});

app.get('/posts', (req, res) => {
    res.render('posts');
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});
//L

// We will discuss this method next week, when we speak about Middlewares

app.use((req, res) => {
 res.status(404).render('404');
});