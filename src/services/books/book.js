import db from '../../db';

const { model, Schema } = db;

const bookSchema = new Schema({
	'name': String,
	'price': Number,
	'category': String,
	'author':String
});

const Book = model('book', bookSchema);

export default Book;
