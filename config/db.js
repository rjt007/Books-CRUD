require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = ()=>{
    mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
    const db = mongoose.connection;

    db.on('error',(err)=>console.error(err.message));
    db.once('open',()=>console.log('Connected to database..'));
};

module.exports = connectDB;