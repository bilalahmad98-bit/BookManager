const {Sequelize}=require("sequelize");


const sequelize=new Sequelize({
    host:'localhost',
    dialect:'postgres',
    username:'postgres',
    password:'0398',
    port:5432,
    database:'mybookscollection'
})

module.exports=sequelize;