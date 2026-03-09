// Create database and models
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({ 
    dialect: 'sqlite', 
    storage: `database/${process.env.DB_NAME}` || 'database/library.db', 
    logging: console.log // Not necessary, but shows SQL queries in the console 
});