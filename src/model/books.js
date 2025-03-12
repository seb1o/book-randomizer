class Books {

    constructor(title, author, isbn, category, yop) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.yop = yop;

    }



    compareByTitle(t2) {
        const t1 = this.title;
        const t2 = t2.title;
        return t1.localeCompare(t2);
    }

    compareByYop(secondBook) {
        const firstYop = this.yop;
        const otherYop = secondBook.yop;
        return firstYop - otherYop;
    }

    compareByCategory(secondBook) {
        const c1 = this.category;
        const c2 = secondBook.category;
        return c1 - c2;
    }


}

export default Books;