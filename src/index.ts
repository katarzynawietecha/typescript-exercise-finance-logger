{
    const inputs = document.querySelectorAll('input');

    let age: number = 50;

    let arr = ["gd", "ff"];
// arr.push(5);
    arr.push("5");
    console.log(arr);

    let data: string; // string

// arrays
    let ninjas: string[]; //array of strings
    ninjas = ["d", "4"];

    let mixed: (string | number | boolean)[]; //array of this three types

    let myNumber: any;

    let ninja: { name: string, age: number }; //declare types
    ninja = {name: "Kaska", age: 32}; //declare values


// functions
    let greet: Function;

// greet = "hello"

    greet = () => {
        console.log(ninja);
    };

    greet();

    const add = (a: number, b: number, c ?: number | string) => {
        //c is an optional parameter. Instead of that we can use default value for c parameter like this:  c: number | string = 10
        console.log(a + b);
    };

    add(5, 8);


    const minus = (a: number, b: number): number => {  // the last ': number' informs about type of result
        return a - b;
    };

    let result = minus(10, 7);


    const consoleNumber = (a: number): void => {  // the last ': void' informs that we don't return anything
        console.log(a);
    };

}

{
    type StringOrNumber = string | number;
    type ObjectWithName = { name: string, uid: StringOrNumber }

    const logDetails = (uid: StringOrNumber, item: string) => {
        console.log(`${item} has a uid of ${uid}`);
    };

    const greet = (user: ObjectWithName) => {
        console.log(`${user.name} says hello`);
    };
}

{
    // example 1
    let greet: (a: string, b: string) => void; // in the future this variable can hold a function that not return anything

    greet = (name: string, greeting: string) => {
        console.log(`${name} says ${greeting}`);
    };

    // example 2
    let calc: (a: number, b: number, c: string) => number; //output will be number

    calc = (numOne: number, numTwo: number, action: string) => {
        if (action === 'add') {
            return numOne + numTwo;
        } else {
            return numOne - numTwo;
        }
    }

    // example 3
    let logDetails: (obj: {name: string, age: number}) => void; // we have one parameter which is specific kind of object with name (string) and age (number)

    type person = {name: string, age: number};

    logDetails = (ninja: person) => {
        console.log(`${ninja.name} is ${ninja.age} years old`);
    }
}