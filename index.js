// index.js
const express = require('express');
const app = express();
const port = 8000; 

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Page - 33791129</title>
    </head>
    <body>
      <h1>Welcome to My Page</h1>
      <h2>About Me</h2>
      <p>Hiya! My name is Sanuzia. I'm a student learning web development.</p>
      <p>I enjoy coding</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`MyPage app is running at http://localhost:${port}`);
});
