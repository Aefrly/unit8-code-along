# Unit 8 Code Along: Books Library API

A RESTful API for managing a library books built with Node.js, Express.js, and Sequelize ORM using SQLite database.

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Set up the database:
   ```bash
   node database/setup.js
   ```

5. Seed the database with sample data:
   ```bash
   node database/seed.js
   ```

6. Start the server:
   ```bash
   node server.js
   ```

## API Endpoints

### Get All Books
- **GET** `/api/books`
- Returns all books in the database

### Get Book by ID
- **GET** `/api/books/:id`
- Returns a specific book by ID

### Create New Book
- **POST** `/api/books`
- Creates a new book
- **Body:**
  ```json
    { 
    "title": "The Hobbit", 
    "author": "J.R.R. Tolkien", 
    "isbn": "978-0-547-92822-7", 
    "genre": "Fantasy", 
    "publishedYear": 1937, 
    "available": true 
    }
  ```

### Update Book
- **PUT** `/api/books/:id`
- Updates an existing books
- **Body:** Same as create books

### Delete Book
- **DELETE** `/api/books/:id`
- Deletes a book by ID

## Database Schema

The `books` table contains the following fields:

- `id` (INTEGER, Primary Key, Auto Increment)
- `title` (STRING, Required)
- `author` (STRING, Required)
- `isbn` (STRING, Required)
- `genre` (STRING, Required)
- `publishedYear` (INTEGER, Required)
- `available` (BOOLEAN, Required)

## Project Structure

```
library-api/
├── database/
│   ├── setup.js    # Database setup and model definitions
│   └── seed.js     # Sample data seeding
├── server.js       # Main server file with API routes
├── package.json
├── .env            # Environment variables
├── .gitignore
└── README.md
```