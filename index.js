/* let user = {};

user.name = 'John';
user.surname = "Smith";
user.name = 'Pete';

console.log(user.name);

delete user.name;

console.log(user.name); */
//write a function isEmpty(obj) which returns true if the object has no properties

let schedule = {};

function isEmpty(schedule) {
    for (let key in schedule) {
       return false;
    } 
    return true;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); 