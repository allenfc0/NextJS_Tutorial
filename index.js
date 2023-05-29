
// import get the express JS 
const express = require('express');

// calling the express frame
const app = express();

// using port
const port = 3000;

// this is a get request method
app.get('/', (req, res) => {
    res.send("API is Alive!");
});

// this post request sends pack the id
app.post('/send-email/:id', (req, res) => {
    res.send(req.params);
});

// starting the server on port 
app.listen(port, () => {
    console.log('app is now listening');
})
