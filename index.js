const express = require('express');

const server = express();
const port = 6000;


const configMiddleware = require('./config/middleware.js');
configMiddleware(server);
//middlewares
server.use(express.json()); // will tell express how to parse the received req body..

const smurfsPicsRouters = require('./routers/smurfsPicsRouters.js')
//for all routs that is ALL CRUD operations for route '/smurfsPics' use smurfsPicsRouters
server.use('/smurfsPics', smurfsPicsRouters)

//endpoints...
//.get  to check basic route... 
server.get('/', (req, res) => {
    res.send('API working....');
});


server.listen(port, () => {
    console.log(`Server is up on PORT:${port}`)
});