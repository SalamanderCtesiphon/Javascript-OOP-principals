const personFactory = (name, age) => {
    const sayHello = () => console.log(`Hello, my name is ${name}`);
    return { name, age, sayHello };
};

const jeff = personFactory('Jeff', 27);

console.log(jeff.name); // Jeff

jeff.sayHello(); // Hello, my name is Jeff