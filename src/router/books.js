import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
} from "../services/books/bookRepo";

// Create a new rouer to handle books
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await getAllBooks();
  
  res.status(200).send(books);
});

router.get("/search", async (req, res) => {
  const searchValue = req.query.search;
  const books = await searchBooks(searchValue);
  if (!books) {
    res.status(404).send();
  } else {
    res.send(books);
  }
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;

  const book = await getBookById(id);

  if (!book) {
    res.status(404).send();
  } else {
    res.send(book);
  }
});



router.delete("/:id", async (req, res) => {

  const {
    id
  } = req.params;

  await deleteBook(id);

  res.status(204).send();
});

router.post("/", async (req, res) => {
  const newBook = req.body;

  try {
    const book = await createBook(newBook);

    res.status(201).send(book);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      error: 'Internal Server Error'
    });
  }
});

router.put("/:id", async (req, res) => {

  const book = req.body;
  const {
    id
  } = req.params;

  try {
    await updateBook(id, book);

    res.status(204).send();
  } catch (e) {
    console.log(e);
    res.status(500).send({
      error: 'Internal Server Error'
    });
  }
});

export default router;