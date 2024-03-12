// Annotations
// Strings

//  let myName: string = 'Mohamed'
//  console.log(myName)

// Numbers

//  let favNumber: number = 3;
//  console.log(favNumber)

// let tsEasy: boolean =  true;
// tsEasy = false
// console.log(tsEasy)

// tyep inferrence

// let tech = ' Typecsript'
// let favNumber = 9;
// let tsHard = true
// console.log(typeof tech)
// console.log(typeof favNumber)
// console.log(typeof tsHard)

// Any Type

// let color: any = 'green'
// console.log(typeof color)

// functions
// regular function
// function addOne(num: number) {
//     return num + 3
// }

// const res = addOne(3)
// console.log(res)

// Arrow function

// const double = (x:number, y:number) => x + y;
// const res = double(2,4)
// console.log(res)

// Default Params Value
// function greet(person: string = 'Annonymous') {
//     return `Hello ${person}`
// }
// const res = greet('mohamed');
// console.log(res)

// function return annotation
// REGULAR FUNCTION
// function double1(x:number): number {
//     return x * x
// }
// const res = double1(2)
// console.log(res)

// Arrow Func
// const double2 = (x: number): number => x * x
// console.log(double2(3))

// Void in typescript

// function printMessage(message: string): void {
//     console.log(`this is my ${message}`)
// }

// printMessage('message')

// Never type

// function that has an infinte loop;

// function throwError(msg: string): never {
//     throw new Error(msg)
// };
// let x: never

// function infinteLoop(): never {
//     while (true) {}
// }

// function neverReturns(): never {
//     while (true) {}
// }

// x = neverReturns()

// Array types in depth;
//1
// const nums : number[] = [1,2,3,4,5,6];
// const str: string[] = ['one', 'two', 'three'];
// console.log(str)
//2
// const items: string[] =  [];
// items.push('keyboard');
// console.log(items)

// const numList: number[] = [];

// numList.push(54)
//error
// numList.push(true)

// const items: Array<number> = [1,2,3,4];
// console.log(items)

// multidimentional array

// const singleDi: number[] =  [1,2,3,4]
// const multiDi: number[][] = [[1,2,3,4]]
// const tripleDi: number[][][] = [[[1,3,4,6,7]]];

// console.log(singleDi)
// console.log(multiDi)
// console.log(tripleDi)

// Objects in typescript

// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "mohamed",
//   lastName: "taha",
//   age: 30,
// };

// const {firstName, lastName, age} = person;

// console.log(`Name: ${firstName} ${lastName}, Age: ${age}`)

function printUser(): {name: string; age: number} {
    return {
        name: 'mohamed',
        age: 30
    }
}

const res = printUser();
console.log(res)
