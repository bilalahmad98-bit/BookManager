const Books = require("./books.model");

//Create
const addBooks=(bookDetails)=>{
const book=Books.create(bookDetails);
return book;
}

//Read
const allBooks=()=>{
    const allBooks=Books.findAll();
    return allBooks;
}

//select based on id
const findBook=async(bookId)=>{
const book=await Books.findOne({where:{id:bookId}});
return book;
}


//Update
const updateBooks=async(bookId,updateBody)=>{
    const book=await Books.findOne({where:{ id:bookId}});
    
    if(!book){
        return null;
    }
    const updatedBook=await Books.update(updateBody,{where:{id:book.id}});
    return updatedBook;
    
}


//delete
const deleteBook=async(bookId)=>{
    const book=await Books.findOne({where:{id:bookId}});
 
if(!book){
    return null;
}
const deletedBook=await Books.destroy({where:{id:bookId}});
return deletedBook;

}

module.exports={addBooks,allBooks,updateBooks,findBook,deleteBook};