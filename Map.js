// Convert an array of temperatures from Celsius to Fahrenheit.
const celsius = [0, 10, 20, 30];
const fahrenhiet = celsius.map((temp) => (temp * 9 / 5) + 32);
console.log(fahrenhiet);

// Create an array of objects containing names and ages, and return an array of names.
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = people.map((persons) => (persons.name));
console.log(names);

// Square each number in an array.
const numbers = [1, 2, 3, 4];
const squareRoot = numbers.map((nums) => (nums * nums));
console.log(squareRoot);
 
// Add 5 to each number in an array of grades.
const grades = [70, 85, 90, 100];
const addFive = grades.map((nums) => (nums += 5)) 
console.log(addFive);

// Convert an array of strings to uppercase.
const fruits = ['apple', 'banana', 'cherry'];
const UpperCase = fruits.map((str) => (str.toUpperCase()));
console.log(UpperCase);

// Extract the domain names from an array of email addresses.
const emails = ['user2@example.com', 'user3@test.com', 'user4@domain.com'];
const domains = emails.map(email => email.split('@')[1]);
console.log(domains);

// Create an array of objects with a new property added. instock : true
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 }
];

const updatedProducts = products.map(product => ({
    ...product,
    instock: true
}));
console.log(updatedProducts);


// Convert an array of objects representing distances in miles to kilometers.
const distances = [
    { city: 'New York', miles: 100 },
    { city: 'Los Angeles', miles: 250 }
];
const updatesDistances = distances.map(dist => ({
    ...dist,
    kilometers: dist.miles * 1.60934
}))
console.log(updatesDistances);

// Extract the first letter of each word in an array.
const words = ['apple', 'banana', 'cherry'];
const firstword = words.map((word) => (word[0]));
console.log(firstword);

// Convert an array of time durations in minutes to hours and minutes.
const durations = [120, 45, 90];
const hoursAndMinutes = durations.map(duration => { 
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return {hours, minutes}
}) 
console.log(hoursAndMinutes);
