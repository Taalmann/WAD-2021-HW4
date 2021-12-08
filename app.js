const express = require('express');
const createApplication = require('express/lib/express');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs')
app.use( express.static( "public" ) );

// listen for requests on port 3000
app.listen(3000);

/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
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

// We will discuss this method next week, when we speak about Middlewares

app.use((req, res) => {
 res.status(404).render('404');
});