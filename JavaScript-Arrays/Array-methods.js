// Array methods to practice.
/*
join
slice


*/


let marvelHeros = ["Deadpol", "Ironman", "Thor"];
let dcHeros = ["Superman", "Volverin", "Batman"];

let allHeros = marvelHeros.join(dcHeros);
// console.log(allHeros);


let months = ["Jan", "March", "April", "May"];
months.splice(1, 0, "Feb");
console.log(months);

// lets add june after may 
months.splice(5, 0, "June");
console.log(months);

console.log(months.slice(1, 4));

// let merge two arrays
let bigBrands = ["Apple", "Samsung", "OnePlus","Google Pixel"];
let smallBrands = ["Xiomi", "Redmi", "Infinix", "Techno"];

// Now merge both of the above arrays into one
// I can use .push here

// bigBrands.push(...smallBrands);
// console.log(bigBrands); 

// But this is not the right way to do this: Push adds one or more element to the end of an array and return the lenght of array use spread operator to do this

// use concat here
let allBrands = bigBrands.concat(smallBrands);
console.log(allBrands);

// Lets use flat
let mynewArr = [0, 1, 2, 3, 4, [5, 6, 7], 8, 9, [10, [11, 12]]];
let finalArray = mynewArr.flat(Infinity); // But if you know the depth of array give it the actual depth
console.log(finalArray);

// Lets use from
console.log(Array.from("Muhammad Shakir"));

// lets use of
console.log(Array.of('Muhammad Shakir','24','Software Engineer'));