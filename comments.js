// Create web server

// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create express app
const app = express();

// Use body parser
app.use(bodyParser.json());

// Set port
const port = 3000;

// Read comments.json
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Set up route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Set up route to create comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});