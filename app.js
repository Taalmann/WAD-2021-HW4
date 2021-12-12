const express = require('express');
const pool = require('./database');
const cors = require('cors');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('Public'));

app.listen(3000, () => {
 console.log("Server is listening to port 3000")
});

app.get('/', async(req, res) => {
    try {
    console.log("get posts request has arrived");
    const posts = await pool.query(
        "SELECT * FROM post ORDER BY id DESC"
    );
    res.render('posts', { posts: posts.rows });
    } catch (err) {
    console.error(err.message);
    }
   });

app.get('/posts', async(req, res) => {
 try {
 console.log("get posts request has arrived");
 const posts = await pool.query(
 "SELECT * FROM post ORDER BY id DESC"
 );
 res.render('posts', { posts: posts.rows });
 } catch (err) {
 console.error(err.message);
 }
});

app.get('/singlepost/:id', async(req, res) => {
 try {
 const id = req.params.id;
 console.log(req.params.id);
 console.log("get a single post request has arrived");
 const posts = await pool.query(
 "SELECT * FROM post WHERE id = $1", [id]
 );
 res.render('singlepost', { posts: posts.rows[0] });
 } catch (err) {
 console.error(err.message);
 }
});

app.get('/posts/:id', async(req, res) => {
 try {
 const { id } = req.params;
 console.log("get a post request has arrived");
 const Apost = await pool.query(
 "SELECT * FROM post WHERE id = $1", [id]
 );
 res.json(Apost.rows[0]);
 } catch (err) {
    console.error(err.message);
}
});

app.delete('/posts/:id', async(req, res) => {
try {
console.log(req.params);
const { id } = req.params;
const post = req.body;
console.log("delete a post request has arrived");
const deletepost = await pool.query(
"DELETE FROM post WHERE id = $1", [id]
);
res.redirect('posts');
} catch (err) {
console.error(err.message);
}
});

app.put('/posts/:id', async(req, res) => {
    try {
    const { id } = req.params;
    console.log("update request has arrived");
    console.log("post id: ", id)
    const updatepost = await pool.query(
        "UPDATE post SET likenr = likenr + 1 WHERE id = $1;", [id]
    );
    res.redirect('posts');
    } catch (err) {
    console.error(err.message);
    }
});
   

app.post('/posts', async(req, res) => {
try {
const post = req.body;
let currentDate = new Date();
let month_names_short =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let seconds = currentDate.getSeconds()
if (seconds < 10) {seconds = "0"+seconds;}
let hours = currentDate.getHours()
if (hours < 10) {hours = "0"+hours;}
let date = month_names_short[currentDate.getMonth()] + " " + currentDate.getDate() + "," + currentDate.getFullYear() + " "+ hours +":" + seconds;
let photourl = '';
let userid = 1;
const IDS = await pool.query("SELECT MAX(id) FROM post");
console.log(IDS.rows[0].max);
id = IDS.rows[0].max+1
console.log(post);
const newpost = await pool.query(
"INSERT INTO post(title, text, photourl, date, id, userid) values ($1, $2, $3, $4, $5, $6) RETURNING*", [post.title, post.text, post.photourl, date, id, userid]
);
res.redirect('posts');
} catch (err) {
console.error(err.message)
}
});

app.get('/create', (req, res) => {
res.render('create');
});

app.use((req, res) => {
res.status(404).render('404');
}); 

