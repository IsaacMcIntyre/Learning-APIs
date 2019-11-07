import Book from "./book";

export const getBookById = id => Book.findById(id).exec();

export const getAllBooks = () => Book.find().exec();

export const createBook = book => {
    let newBook = new Book(book);

    return new Promise((success, fail) => {
        newBook
            .save()
            .then(success)
            .catch(fail);
    });
};

export const updateBook = (id, book) =>
    Book.updateOne({ _id: id }, book).exec();

export const deleteBook = id => Book.deleteOne({ _id: id }).exec();

export const searchBooks = searchValue => Book.find({name: new RegExp('/' + searchValue + '/i')})