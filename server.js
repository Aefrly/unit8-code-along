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

//Get all books
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/books/:id - Retrieve a single book based on the id provided
app.get('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /api/books - Create a new book
app.post('/api/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /api/books/:id - Update an existing book based on the id provided
app.put('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE /api/books/:id - Delete a book based on the id provided
app.delete('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});