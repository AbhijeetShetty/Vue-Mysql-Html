const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("practice","root","Abhi08338@",{
    host:"localhost",
    dialect:"mysql",
    operatorsAliases: false,

    pool:{
        max: 5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

db.Sequelize = sequelize
db.Sequelize = sequelize

module.exports= db