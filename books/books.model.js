const {DataTypes}=require("sequelize");
const sequelize = require("../sequelize/config");



//DEFINING BOOKS MODEL ,i.e., Table creation and column attributes 

const Books=sequelize.define('Books',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    bookName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genre:{
    type:DataTypes.STRING,
    allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },publisher:{
       type:DataTypes.STRING,
       allowNull:false 
    }
    },{timestamps:true,createdAt:true,tableName:'Books',updatedAt:true});
    
    
    module.exports=Books;