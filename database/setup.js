// Create database and models
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({ 
    dialect: 'sqlite', 
    storage: `database/${process.env.DB_NAME}` || 'database/library.db', 
    logging: console.log // Not necessary, but shows SQL queries in the console 
});

async function setupDatabase() { 
    try { 
        await db.authenticate(); 
        console.log('Connection to database established successfully.'); 

        await db.sync({ force: true })
        console.log('Database file created at:',`database/${process.env.DB_NAME}`); 

        await db.close(); 
    } catch (error) { 
         console.error('Unable to connect to the database:', error); 
    } 
}

// Run setup if this file is executed directly
if (require.main === module) {
    setupDatabase();
}