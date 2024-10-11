import { create as newBlogPost } from "./blogpost";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "http://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();