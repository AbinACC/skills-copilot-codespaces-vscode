// Create web server
// Create a route /comments that returns a JSON object
// The JSON object should have a key of comments and value of an array of objects
// Each object should have a key of username and message and value of your choice
// The JSON object should have a key of total_comments and value of the number of objects in the comments array
// The JSON object should have a key of status and value of success
// The JSON object should have a key of message and value of comments retrieved successfully
// Respond with the JSON object

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  const comments = [
    {
      username: 'Alice',
      message: 'Hello there!',
    },
    {
      username: 'Bob',
      message: 'Hi!',
    },
    {
      username: 'Charlie',
      message: 'Good day!',
    },
  ];
  const total_comments = comments.length;
  const response = {
    comments,
    total_comments,
    status: 'success',
    message: 'comments retrieved successfully',
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});