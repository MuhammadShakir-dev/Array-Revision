/*
Easy: Write a function that returns a substring of a string, starting from a specified index and extending to the end of the string, 
using substring().
Medium: Write a function that returns a substring between two specified indices using substring().
*/

// question no 1
const creatingSubString = (str, n) => { 
    let newSubString = str.substring(n);
    return newSubString;
}

console.log(creatingSubString("xyz@gmail.com", 4));

// question no 2

const anotherSubString = (str, startpoint, endpoint) => {
    let newSubString = str.substring(startpoint, endpoint);
    return newSubString;
}

console.log(anotherSubString("Site-8722, Karachi, Pakistan", 0 , 10));