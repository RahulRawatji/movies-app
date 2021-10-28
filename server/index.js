require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>{
    console.log('listning at port 4000')
});