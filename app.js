require('dotenv').config() //store sensitive data
const express = require('express');//first we get express
const session = require('express-session'); //to store the cookies
require('./mondodbs/app')
const cors = require('cors');
const morgan = require('morgan') // middleware to log http requests and errors, simplifies the process
const app = express();
const MongoDBStore = require('connect-mongodb-session')(session); //to store the session information inside a cookie
const store = new MongoDBStore({ //store set-up
    uri: process.env.MONGODB_URI,
    collection: 'mySessions'
});
app.use(session({ //to store user information 
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))
const mongoURI = process.env.MONGO_URI;
app.use(morgan());
app.use(cors());
// app.use(urlencoded({extended:true}));
app.use(express.json());

const Port = process.env.PORT || 3000
app.listen(Port , ()=>{
    console.log('expres===============>')
})