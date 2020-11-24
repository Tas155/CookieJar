let userChoice=prompt("How many cookies would you like to take? (There are 10 cookies in the jar)");

let cookieJar=10;
let cookie=userChoice;

let z = cookieJar - cookie;

console.log(z);

let jar=prompt("Would you like to eat 1 cookie? (Y or N)");

let x = z - 1;
console.log(x);

if (z > 0) {
    alert("Enjoy your cookie!");
} else {
    alert("uh oh! Looks like the jar is empty! You took too many cookies!");
}
// ??? i tried making a function, but i do not know how to constantly make it minues 1 T_T I also am not sure on how to make my if else statement connect to my jar=prompt//

