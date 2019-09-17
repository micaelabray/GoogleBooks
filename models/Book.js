const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// New Schema
var BookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            author: {
                type: String,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    }
});

// New model created from the Schema above
const Book = mongoose.model("books", BooksSchema);

// Export the Article Model
module.exports = Book