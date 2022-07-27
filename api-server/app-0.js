const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({status: '200', message: 'Welcome to Express!'});
})

app.post('/', (req, res) => {
    res.status(201).json({status: '201', message: 'You can post to this route!'});
})



const port = 3000;
app.listen(port, () => {
    console.log(`Server Listenng on Port ${port}...`);
})