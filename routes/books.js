const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Add a books
router.post('/',async(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json({message: 'All fields are required.'});
        }
        const { title, author, summary } = req.body;

        const book = await Book.create({
            title,
            author,
            summary
        });
        return res.status(201).json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get all books
router.get('/',async(req,res)=>{
    try{
        const book = await Book.find();
        return res.status(200).json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get a single book
router.get('/:id',async(req,res)=>{
    try{
        const book = await Book.findOne({_id: req.params.id});
        if(book===null){
            return res.status(400).json({message: 'No book found.'})
        }
        return res.status(200).json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//Update a book
router.put('/:id',async(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json({message: 'All fields are required.'});
        }
        const { title, author, summary } = req.body;
        const book = await Book.findOne({_id: req.params.id});
        if(book===null){
            return res.status(400).json({message: 'Enter a valid book id.'});
        }
        await Book.findOneAndUpdate({_id: req.params.id}, 
            {
                title,
                author,
                summary
            }
        );
        return res.status(201).json({message: 'Book updated succesfully.'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});


//Delete a book
router.delete('/:id',async(req,res)=>{
    try{
        const book = await Book.findOne({_id: req.params.id});
        if(book===null){
            return res.status(400).json({message: 'Enter a valid book id.'});
        }
        await Book.deleteOne({_id: req.params.id});
        return res.status(200).json({message: 'Book deleted succesfully.'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;