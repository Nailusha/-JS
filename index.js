
//95стр
var arr = ["1", "10", "100", "1000"];
for (let i = 0; i < arr.lenght && arr[i] < 500; i++) {

}

//98стр
class Page {
    constructor(text) {
        this.text = text;
    }
    print() {
        console.log(this.text)
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }
    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }
    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

//var mathNote = new Notebook();
//mathNotes.addPage("Arithmetic: + - * / ...");
//mathNotes.addPage("Trigonometry: sin cos tan ...");

//mathNotes.print();
// ..

//100стр

/*class Publication {
    constructor(title,author,pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}


class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedon
        );
        this.publisher = bookDetails.publisher;
        this.ISNB = bookDetails.ISNB;
    }
    print() {
        super.print();
        console.log(`
            Publisher: ${ this.publisher }
            ISNB: ${ this.ISNB }
            `);
    }
}

class BlogPost extends Publication {
    constructor(title,author,pubDate,URL) {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}

var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedon: "June 2014",
    publisher: "O'Reilly",
    ISNB: "123456-789"
});

YDKJS.print();

var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "http://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();*/

//104стр

function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                By: ${author}
                ${pubDate}
                `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedon
    );
    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISNB: ${bookDetails.ISNB}
                `);
        }
    };

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };
    return publicAPI;
}

//106стр

var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedon: "June 2014",
    publisher: "O'Reilly",
    ISNB: "123456-789"
});

YDKJS.print();

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "http://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();

//109стр

