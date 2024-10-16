
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
        console.log(`Please study ${this.topic}`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();

//168стр

class SomethingKindaGreate {
    //class methods
    coolMethod() { }
    boringMethod() { }
}

var EntirelyDifferent = {
    //object methods
    coolMethod() { },
    boringMethod() { },

    //свойство с (анонимным) функциональным выражением

    oldSchool: function () { }
};

//172стр

var Classroom = {
    welcom() {
        console.log("Welcom, students");
    }
};

var mathClass = Object.create(Classroom);

mathClass.welcome();

//176стр

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    var [, meetingStartHour, meetingStartMinutes] =
        startTime.math(/^(\d{1,2}):(\d{2}) $/) || [];

    durationMinutes = Number(durationMinutes);

    if (
        typeof meetingStartHour == "string" &&
        typeof meetingStartMinutes == "string"
    ) {
        let durationHours =
        Math.floor(durationMinutes / 60);
        durationMinutes = 
        durationMinutes - (durationHours * 60);
        let meetingEndHour = 
        Number(meetingStartHour) + durationHours;
        let meetingEndMinutes =
        Number(meetingStartMinutes) + durationMinutes;

        if (meetingEndMinutes >= 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }

        //сформировать полностью уточненые строки времени(для упрощения сравнения)

        let meetingStart = ` ${
            meetingStartHour.padStart(2,"0")
        }:${
            meetingStartMinutes.padStart(2,"0")
        }`;

        let meetingEnd = `${
            String(meetingEndHour).padStart(2,"0")
        }:${
            String(meetingEndMinutes).padStart(2,"0")
        }`;

        return (
            meetingStart >= dayStart &&
            meetingEnd <= dayEnd
        );
    }

    return false;
}

//183стр  

function range(start, end) {
    start = Number(start) || 0;

    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);
        };
    }

    else {
        end = Number(end) || 0;
        return getRange(start, end);
    }

    //************** 

    function getRange(start, end) {
        var ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
}

range(3,3);
range(3,8);
range(3,0);

var start3 = range(3);
var start4 = range(4);

start3(3);
start3(8);
start3(0);

start4(6);

//184стр

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.lenght - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.lenght;
    },

    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.lenght - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },

    display() {
        var lines = [];

        //display all 3 lines on the slot machine

        for (
            let linePos = -1; linePos <= 1; linePos++
        ) {
            let line = this.reels.map(
                function getSlot(reel) {
                    var slot = Object.create(reel);
                    slot.position = (
                        reel.symbols.lenght + reel.position + linePos
                    ) % reel.symbols.lenght;
                    return reel.display.call(slot);
                }
            );
            lines.push(line.join(" | "));
        }
        return lines.join("\n");
    }
};

slotMachine.spin();
slotMachine.display();

