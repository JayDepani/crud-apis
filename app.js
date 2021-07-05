require('dotenv').config();
require('./server/database/connection');
const express = require('express');
const app = express();
const router = require('./server/routers/router');
const port = process.env.PORT || 8000;

// For receiving json data form post request
app.use(express.json());

// Routers
app.use(router);

app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`);
});
