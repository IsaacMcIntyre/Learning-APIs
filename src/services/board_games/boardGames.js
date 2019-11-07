import db from '../../db';

const { model, Schema } = db;

const boardGameSchema = new Schema({
	'name': String,
	'price': Number,
	'category': String,
  'minPlayers': Number,
  'maxPlayers': Number
});

const Book = model('book', bookSchema);

export default Book;
