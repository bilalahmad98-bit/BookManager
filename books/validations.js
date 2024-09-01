const joi=require("joi");



const schema=joi.object({

    id:joi.number().integer().min(1).messages({
        "number.base":"Book Id should be a number",
        "number.integer":"Book id should be an integer",
        "number.min":"Book id should be greater than 1",
        // "any.required":"Book id is required"
    }),
    bookName:joi.string().min(3).max(50).required().messages({
    "string.base":"Book name should be a text",
        "string.max":"Book name can have upto 50 characters only",
        "string.min":"Book name should have a minimum of 3 characters",
        "any.required":"Book name is required"
    }),
    genre:joi.string().min(3).max(50).required().messages({
        "string.base":"Genre should be a text",
        "string.max":"Genre name can have upto 50 characters only",
        "string.min":"Genre name should have a minimum of 3 characters",
        "any.required":"Genre is required"
    }),
    author:joi.string().min(3).max(50).required().messages({
        "string.base":"Author name should be a text",
        "string.max":"Author name can have upto 50 characters only",
        "string.min":"Author name should have a minimum of 3 characters",
        "any.required":"Author name is required"
    }),
    publisher:joi.string().min(3).max(50).required().messages({
        "string.base":"Publisher name should be a text",
        "string.max":"Publisher name can have upto 50 characters only",
        "string.min":"Publisher name should have a minimum of 3 characters",
        "any.required":"Publisher name is required"  
    
    })
    
    })
    
    const bookIdSchema=joi.number().integer().min(1).required().messages({
        "number.base":"Book Id should be a number",
        "number.integer":"Book id should be an integer",
        "number.min":"Book id should be greater than 1",
        "any.required":"Book id is required"
    });
    
    const updateSchema=joi.object({
    
        id:joi.number().integer().min(1).required().messages({
            "number.base":"Book Id should be a number",
            "number.integer":"Book id should be an integer",
            "number.min":"Book id should be greater than 1",
            "any.required":"Book id is required"
        }),
        bookName:joi.string().min(3).max(50).messages({
            "string.base":"Book name should be a text",
        "string.max":"Book name can have upto 50 characters only",
        "string.min":"Book name should have a minimum of 3 characters",
        }),
        genre:joi.string().min(3).max(50).messages({
            "string.base":"Genre  should be a text",
            "string.max":"Genre name can have upto 50 characters only",
            "string.min":"Genre name should have a minimum of 3 characters",
        }),
        author:joi.string().min(3).max(50).messages({
            "string.base":"Author name should be a text",
        "string.max":"Author name can have upto 50 characters only",
        "string.min":"Author name should have a minimum of 3 characters",
        }),
        publisher:joi.string().min(3).max(50).messages({
        
            "string.base":"Publisher name should be a text",
            "string.max":"Publisher name can have upto 50 characters only",
            "string.min":"Publisher name should have a minimum of 3 characters",
    
        }),
    })
    
    
    
    
    
    
    
    const validateBook=(req,res,next)=>{
        const {error}=schema.validate(req.body,{abortEarly:false})
           
        if(error){
            const errorMessages= error.details.map((ele)=>ele.message);
            // res.status(400).json({errors:error.details});
            res.status(400).json({errors:errorMessages});
           return;
        }
        next();
        
    }
    
    const validateId=(req,res,next)=>{
        const {error}=bookIdSchema.validate(Number(req.params.id),{abortEarly:false});
    
        if(error){
            const errorMessages=error.details.map((ele)=>ele.message);
            res.status(400).json({errors:errorMessages});
        }
        next()
    }
    
    const validateUpdate=(req,res,next)=>{
        const {error}=updateSchema.validate({id:Number(req.params.id),...req.body},{abortEarly:false});
    
        if(error){
            const errorMessages=error.details.map((item)=>item.message);
            res.status(400).json({errors:errorMessages});
        }
        next();
    }
    
    
    
    
    module.exports={validateBook,validateId,validateUpdate}