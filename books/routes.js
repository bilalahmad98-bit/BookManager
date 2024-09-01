const express=require("express");
const { addBooks, allBooks, updateBooks, findBook, deleteBook } = require("./books");

const { validateBook, validateId, validateUpdate } = require("./validations"); 

const router=express.Router();

router.post("/createBooks",validateBook,async(req,res)=>{
    const newBook=await addBooks(req.body);
    res.status(201).json({
        Book:newBook
    })
    
})

router.get("/getAllBooks",async(req,res)=>{
    const books=await allBooks();
    res.status(200).json({
        Books:books
    })
})

router.get("/getSingleBook/:id",validateId,async(req,res)=>{
    const book=await findBook(Number(req.params.id));
    res.status(200).json({
        Book:book
    })
})
router.put("/updateBook/:id",validateUpdate,async(req,res)=>{
    const updatedBook=await updateBooks(Number(req.params.id),req.body);
    // console.log(updatedBook);
    
    res.status(200).json({
        update:updatedBook,
       
    })
})

router.delete("/deleteBook/:id",async(req,res)=>{
    const bookDeleted=await deleteBook(Number(req.params.id));

    if(!bookDeleted){

        res.status(400).json({
            message:"Book not found"
        })
     }else{
        res.status(200).json({
            result:bookDeleted,
            message:"Book deleted"
        })
     }
   
})



module.exports=router;
