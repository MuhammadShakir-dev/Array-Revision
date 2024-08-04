// Stack example

let a = 1
let b = a + 2;
console.log(a);
console.log(b);

// Heap example

let user1 = {
    userName: "Shakir",
    userEmail: "XYZ@gmail.com",
    isloggedIn : true
}

let user2 = user1;
user2.userName = "Haris"
console.log(user1);
console.log(user2);

// To get rid of this thing we use spread operator

let newUser = {
    name: "Demo1",
    email: "Demo@Demo.com",
    isloggedIn : true
}

let newUser1 = { ...newUser };
newUser1.name = "Shakir", newUser1.email = "XYZ@gmail.com"
console.log(newUser);
console.log(newUser1);
