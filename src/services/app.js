import DataService from './DataService.js';

const dataService = new DataService();
const books = dataService.getBooksData();

console.log('Books data:', books); // Add this line to log the books data

function displayBooks(books) {
    const container = document.getElementById('books-container');
    if (!container) {
        console.error('Element with ID "books-container" not found'); // Add this line to check if the container exists
        return;
    }
    container.innerHTML = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.textContent = `${book.title} by ${book.author} (${book.yop}) - ${book.category}`;
        container.appendChild(div);
    });
}

function orderByTitle() {
    const sortedBooks = [...books].sort((a, b) => a.compareByTitle(b));
    displayBooks(sortedBooks);
}

function orderByAuthor() {
    const sortedBooks = [...books].sort((a, b) => a.compareByAuthor(b));
    displayBooks(sortedBooks);
}

function  () {
    const sortedBooks = [...books].sort((a, b) => a.compareByYop(b));
    displayBooks(sortedBooks);
}

window.orderByTitle = orderByTitle;
window.orderByAuthor = orderByAuthor;
window.orderByYop = orderByYop;

// Initial display
displayBooks(books);
