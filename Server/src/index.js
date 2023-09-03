const server = require("./app");
const { conn } = require('./DB_connection');
require('dotenv').config();

const port = process.env.PORT || 3001

server.listen(port, () => {
    console.log(`Server on port: ${port}`)
    conn.sync({ force: false });

},
)






// const http = require('http');

// const getCharById = require('./controllers/getCharById')

// http.createServer((req, res)=> {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if ( req.url.includes("/rickandmorty/character") ) {

//         const id = req.url.split('/').at(-1);
//         getCharById(res, id);

//     };

// }).listen(3001);
