
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

//121стр

//два элемента DOM, btn1, btn2

/*var buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");

for (let [btn, btnName] of buttonNames) {
    btn.addEventListener("click", function onClick() {
        console.log(`Clicked ${ btnName }`);
    });
}

//122стр

var arr = [ 10, 20, 30 ];

for (let [idx, val] of arr.entries()) {
    console.log(` [${ idx }]: ${ val }`);
}*/

//124стр

/*function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!`);
    };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");
hello("Sarah");
howdy("Grant");

//126стр

function getSomeData(url) {
    ajax(url, function onResponse(resp) {
        console.log(`Response (from ${url}): ${resp}`
        );
    });
}

getSomeData("https://some.url/wherever");*/


//130стр

function classroom(teacher) {
    return function study() {
        console.log(
            `${teacher} says to study ${this.topic}`
        );
    };
}

var assignment = classroom("Kyle");

var homework = {
    topic: "JS",
    assignment: assignment
};

homework.assignment();

var otherHomework = {
    topic: "Math"
};

assignment.call(otherHomework);

//134стр

var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);

otherHomework.topic;


//138стр

var homework = {
    study() {
        console.log(`Please study ${ this.topic }`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();

