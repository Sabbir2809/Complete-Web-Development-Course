const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

const blogs = require('./data/blog.json');

app.get('/', (req, res) => {
  res.send('Smart Learning Center is Running...');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.get('/blog', (req, res) => {
  res.send(blogs);
});

app.get('/blog/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === id);
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Smart Learning Center Running on port, ${port}`);
});
