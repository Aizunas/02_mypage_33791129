// Mypage web app

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
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
  `
);
    }).listen(port, function() { 
        console.log(`MyPage app is running at http://localhost:${port}`);

}); 
