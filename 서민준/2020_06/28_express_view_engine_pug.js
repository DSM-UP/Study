const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.listen(3001, function()
{
    console.log("listening on 3001");
});

app.get('/', function(req, res)
{
    res.render('28_index', { title: 'Hey', message: 'Hello there!' });
});