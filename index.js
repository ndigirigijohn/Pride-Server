//Import the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//use dotenv to read .env vars into Node
require('dotenv').config();

//connect to database
const { connectDB } = require('./config/config');

connectDB();

//import products route
const productsRoute = require('./routes/products');


//Create an instance of the Express app
const app = express();

//Enable CORS by using the cors middleware
app.use(cors());

//Enable JSON parsing by using the body-parser middleware
app.use(bodyParser.json());


//use products route
app.use('/products', productsRoute);

//get default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
