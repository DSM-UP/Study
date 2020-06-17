const express = require('express')
const app = express()
const port = 3000
const uri = 'mongodb+srv://hello_jun:jin89434795@cluster0-l4b13.mongodb.net/<dbname>?retryWrites=true&w=majority'
const moongose = require('mongoose')
.connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//package.json에서 시작 인덱스 설정가능