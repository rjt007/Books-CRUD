require('dotenv').config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({request:'success'});
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server is listening on PORT ${PORT}..`));