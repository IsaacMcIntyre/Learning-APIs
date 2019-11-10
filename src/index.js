import app from './app';
import books from './router/books';
import boardGames from './router/boardGames';
import express from 'express';

const router = express.Router();

app.use('/books', books);

app.use('/board-games', boardGames);