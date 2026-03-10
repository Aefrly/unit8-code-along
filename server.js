// Create your Express server that queries the database here
const express = require('express');
const { Book } = require('./database/setup.js');
const app = express();
const PORT = process.env.PORT || 3000;

async function verifyDatabaseConnection() {
    try {
        await Book.sequelize.authenticate();
        console.log('Connection to database established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
// Call the function to verify the database connection when the server starts
verifyDatabaseConnection();