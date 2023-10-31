require('dotenv').config();
const express = require('express');
const app = express();
const booksRoute = require('./routes/books');

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({request:'success'});
});

app.use('/api/books',booksRoute);

//Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server is listening on PORT ${PORT}..`));