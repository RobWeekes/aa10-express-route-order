const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Server is alive");
});

//  WORKING
app.get('/goodbye/until/forever', (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});

//  WORKING
app.get('/goodbye/until/:time', (req, res) => {
    res.send(`Have a nice day! See you ${req.params.time}.`);
});

//  WORKING
app.get(['/goodbye', '/goodbye/*'], (req, res) => {
    res.send("Goodbye, my friend!");
});

//  WORKING
app.get('/hello', (req, res) => {
    res.send("Hello, my friend!");
});



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
