// Code With Explain
// The line below is commented out, so it does nothing. It would set the inner HTML of an element with id "write" to a welcome message.
// var writeTxt = document.getElementById("write").innerHTML = 'Hey Welcome to js classes';

// Log a message to the console
console.log("Assignment");

// Define individual variables to store names
var name1 = "Name1";
var name2 = "Name2";
var name3 = "Name3";
var name4 = "Name4";
var name5 = "Name5";

// Create an array to hold the names
var names = [name1, name2, name3, name4, name5];

// Log the names array to the console
console.log("Data", names);

// Add a new element "Name-0" to the beginning of the names array
names.unshift("Name-0");

// Log the updated array to the console
console.log("Array Data>", names);

// Log the length of the array to the console
console.log("Array Length>", names.length);

// Create an empty array called newArr (though it's not used later)
var newArr = [];

// Create a new array by slicing the names array from index 1 to index 3 (not including index 3)
var entery = names.slice(1, 3);

// Log the sliced entries to the console
console.log("Entries>", entery);

// Loop through the names array and log each element to the console
for (var i = 0; i < names.length; i++) {
    var element = names[i];
    console.log(element);
}

// Loop to print the multiplication table of 2 from 1 to 10
for (let a = 1; a <= 10; a++) {
    // The commented line below is not needed
    // const element = array[a];
    
    // Log the multiplication result to the console
    console.log(a + " X " + 2 + " = " + a * 2);   
}

// Loop to print numbers from 1 to 100
for (var d = 1; d <= 100; d++) {
    // The commented line below is not needed
    // const element = array[a];
    
    // Log the current number to the console
    console.log(d);   
}

// Loop to print even numbers between 1 and 100
for (var e = 1; e <= 100; e++) {
    // The commented line below is not needed
    // const element = array[e];
    
    // Check if the number is even
    if (e % 2 === 0) {
        console.log(e);
    }
}

// Loop to print odd numbers between 1 and 100
for (var e = 1; e <= 100; e++) {
    // The commented line below is not needed
    // const element = array[e];
    
    // Check if the number is odd
    if (e % 2 !== 0) {
        console.log(e);
    }
}

// Loop to print numbers from 100 down to 1 in reverse order
for (var r = 100; r >= 1; r--) {
    console.log(r); 
}

// Another loop to print the multiplication table of 2 from 1 to 10
for (var h = 1; h <= 10; h++) {
    // The commented line below is not needed
    // const element = array[h];
    
    // Log the multiplication result to the console
    console.log(h + " X " + 2 + " = " + h * 2);
}

// // var writeTxt = document.getElementById("write").innerHTML = 'Hey Welcome to js classes';
// console.log("Assignment")
// var name1 = "Name1";
// var name2 = "Name2";
// var name3 = "Name3";
// var name4 = "Name4";
// var name5 = "Name5";
// var names = [name1, name2, name3, name4, name5];
// console.log("Data", names)
// names.unshift("Name-0");
// console.log("Array Data> ",names);
// console.log("Array Length>",names.length)
// var newArr = [];
// var entery = names.slice(1, 3);
// console.log("Entries>", entery)
// for (var i = 0;  i < names.length; i++) {
//     var element = names[i];
//     console.log(element)
// }
// for (let a = 1; a <= 10; a++) {
//     // const element = array[a];
//     console.log(a + " X " + 2 + " = " + a * 2)   
// }
// for (var d = 1; d <= 100; d++) {
//     // const element = array[a];
//     console.log(d)   
// }
// for (var e = 1; e <= 100; e++) {
//     // const element = array[e];
//     if (e % 2 === 0) {
//         console.log(e)
// }
// }
// for (var e = 1; e <= 100; e++) {
//     // const element = array[e];
//     if (e % 2 !== 0) {
//         console.log(e)
//     }
// }
// for (var r = 100; r >= 1; r--) {
//     console.log(r); 
// }
// for (var h = 1; h <= 10; h++) {
//     // const element = array[h];
//     console.log(h + " X " + 2 + " = " + h * 2);
// }