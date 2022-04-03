import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','password1#',{
    host: "localhost",
    dialect: "mysql"
});

export default db;