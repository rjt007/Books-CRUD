require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const booksRoute = require('./routes/books');

//CORS Setting
const CorsOptions = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH'
    ],
  
    allowedHeaders: [
      'Content-Type', 'Authorization'
    ],
};
  
app.use(cors(CorsOptions));
app.use(express.json());

app.use('/api/books',booksRoute);

//Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server is listening on PORT ${PORT}..`));