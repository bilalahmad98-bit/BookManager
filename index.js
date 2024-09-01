const bodyParser = require('body-parser');
const express=require('express');
const sequelize = require('./sequelize/config');
const Books = require('./books/books.model');
const app=express();
const bookRoutes=require("./books/routes");




sequelize.authenticate().then(async()=>{

    

        await sequelize.sync();
        await Books.sync({alter:true});
        console.log("Database connection established");
    

}).catch((err)=>{
    console.log("Error in database connection",err);
    
})



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/books",bookRoutes);



app.listen(3010, ()=>{
    console.log("App started on port :3010");
})