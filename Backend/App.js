const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const {readdirSync} = require('fs') ; 
const {db} = require('./db.js');


dotenv.config() ; 

const app = express() ; 
const PORT = process.env.PORT ;  

app.use(bodyParser.json());

app.use(express.json()) 
app.use(cors()) 


readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)))

const server = () => {
    db();
    app.listen(PORT , () => {
        console.log('you are listening to port ' , PORT)
    })
}
server() ; 