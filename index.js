import express from "express";
import bodyParser from "body-parser";

const app = express(); 
const PORT = 3000; 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const titles = []
const blogs = []

app.get("/", (req, res) => {
    titles.push(req.body.title)
    blogs.push(req.body.blog)
    res.render("index.ejs", {titles, blogs})
});

app.post("/submit", (req, res) => {

    titles.push(req.body.title)
    blogs.push(req.body.blog)

    console.log(req.body)

    res.render("index.ejs", {titles, blogs})


})

app.get("/edit-post", (req, res) => {
    function matchPost(index) {
        // const matchTitle = document.getElementById(`title-${index}`).value;
        const matchBlog = document.getElementById(`blog-${index}`).value;
        document.getElementById('edit-blog').value = matchBlog;
        document.getElementById('form').submit();
      }
    // const selectedItem = req.body['selected-item'];  

    res.render("posts.ejs")
})

// implement the post creation feature. This includes creating the form on the home page and handling the form submission in the server.

// Implement the post viewing feature. This includes displaying all the posts on the home page.

// Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.

// Implement the delete feature. This allows the user to click a button and remove the post from the home page.

// Implement the alternative list to show a different set of todo tasks.

// Test the application to ensure that post creation and viewing are working correctly.


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });