/*
Easy: Write a function to find the position of the first occurrence of a specified value in a string using 
indexOf().

Medium: Write a function that counts the occurrences of a specified character in a string using indexOf().
*/

// question no 1
const findFirstOccurance = (str, char) => { 
    let position = str.indexOf(char);
    return position;
}

console.log(findFirstOccurance("hello","h"));
 
// question no 2

const findAllOccurance = (str, char) => { 
    let count = 0;
    let position = str.indexOf(char);

    while (position !== -1) { 
        count++;
        position = str.indexOf(char, position + 1);
    }

    return count;
} 

console.log(findFirstOccurance("dribbble", "b"));