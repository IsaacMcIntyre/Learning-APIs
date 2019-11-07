import app from './app';
import books from './router/books';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {  
  res.status(200).send("Go to http://localhost:3014/books");
});

app.use('/books', books);