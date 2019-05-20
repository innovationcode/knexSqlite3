//need express for server building..
const express = require("express");
const server = express();
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

//middleware to change or verify data between request and response
//Three-types middleware
//built-in
//third party
//custom 
//can use middlewares globally by using 'server.use(middleware)' or locally by mentioning that middleware for that particular route
//whatever in server.use() will be middlewares.............
module.exports = server => {
    server.use(morgan('short'));//morgan('dev') // third-party middleware give all info about request received .. so if needed can be saved to database
    server.use(helmet()); //Helmet can help protect your app from some well-known web vulnerabilities and secure our web applications.
    server.use(express.json()); //built-in middleware
    server.use(cors()); //Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources
}
//ORDER MATTERS FOR MIDDLEWARE ... SO THEY SHOULD BE PLACED IN ORDER 1. REQUEST : HELMET 2. SECURITY : HELMET....