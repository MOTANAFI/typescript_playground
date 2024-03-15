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

// function printUser(): {name: string; age: number} {
//     return {
//         name: 'mohamed',
//         age: 30
//     }
// }

// const res = printUser();
// console.log(res)

// type Aliases

// type User = {
//     name: string;
//     age: number;
//     location: string
// }

// const printUserInfo = (user: User) => {
//     return `Name: ${user.name} Age: ${user.age}, location: (${user.location})`
// }

// const res = printUserInfo({name: 'Alex', age: 30, location: 'USA'});
// console.log(res)

// Optional properties

// type User = {
//     name: string;
//     age?: number;
//     readonly location: string
// }

// const user: User = {
//     name: 'mohamed',
//     age: 30,
//     location: 'japan'
// }

// console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`)

// Intersection type

// type UserInfo = {
//     firstName: string;
//     lastName: string;
//     age: number
// }

// type AccountDetails = {
//     email: string;
//     password: string
// }

// type User = UserInfo & AccountDetails

// const moha: User = {
//     firstName: 'moha',
//     lastName: 'wbi',
//     age: 30,
//     email: 'lakaaka@gmail.com',
//     password: 'password12'
// }

// console.log(`Name: ${moha.firstName} ${moha.lastName} Age: ${moha.age} Email: ${moha.email}`)

// Union types

// let password: string | number = 20;

// type UserInfo = {
//     first: string;
//     last: string;
//     age: number
// }
// type AccountDetails = {
//     email: string;
//     password: string;
// }

// let user: UserInfo | AccountDetails = {
//     first: 'lakie',
//     last: 'Dakie',
//     age: 45
// }

// let user: UserInfo | AccountDetails = {
//    email: 'lakei@gmail.com',
//    password: 'lakie2340'
// }

// const items: (number  | string)[] = [1,4,67,76, 'stringksd']
// console.log(items)

// Literal types
// string literal types
// let color: 'red' | 'green' | 'blue';
// color = 'red'

// Tuples

// let myTuples: [number, string]
// myTuples = [10, 'lakak']

// console.log(myTuples)

// const porducts: (number | string)[] = ['item 1', 12];
// console.log(porducts)

// const games: [string, number, boolean] = ['Game 1', 2, true]
/// Enums

// enum WeatherCondition {
//     Sunny = 'sunny',
//     Cloudy = 'cloudy',
//     Rainy = 'rainy',
//     Snowy = 'snowy'
// }
// const currentWeather = WeatherCondition.Snowy

// console.log(WeatherCondition.Rainy)

// Classes in typescript

// class Person {
//     name: string;
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age

//     }
// }

// const person  = new Person("jakaka", 40)
// console.log(person.name)

//Access Modifiers
// in Typescript, you can access modifiers to control the visibility
// of class members (properties and methods). Access modifiers determine the ways
// in which class members can be accessed from whithin and outside the class.
// e.g public, private, protected;

// class Person {
//     private first: string;
//     public last: string;
//     protected age: number;
//     constructor(first: string, last: string, age: number) {
//         this.first = first;
//         this.last = last;
//         this.age = age
//     }
//     getName(): string {
//         return `${this.first} ${this.last} Age: ${this.age}`
//     }
// }

// // let p1 = new Person('lakaka', 'jakaka')

// class Child extends Person {
//     constructor(first: string, last: string, age: number) {
//         super(first, last, age);

//     }

// }

// const moha = new Child('moha', 'na', 40);
// console.log(moha)

// Getters and setters

// class MyClass {
//     private _myProperty: number = 0;
//     get myProperty(): number {
//         return this._myProperty
//     }

//     set myProperty(value: number) {
//         this._myProperty = value
//     }
// }

// const myInstance = new MyClass();
// myInstance.myProperty = 90

// console.log(`Current value: ${myInstance.myProperty}`)

// interfaces
// interface Computer {
//     name: string;
//     ram: number;
//     hdd: number
// }

// const computerExample: Computer =  {
//     name: 'i17',
//     ram: 8,
//     hdd: 100
// }

// console.log(computerExample)

// interface Movie {
//     readonly name: string;
//     ratings: number;
//     genre?: string;
// }

// const movie1 : Movie = {
//     name: 'Star Wars',
//     ratings: 9.0,
//     genre: 'drama, action'
// }

// console.log(movie1)

// interface for functions

// interface MathOp {
//     (x: number, y: number): number
// }

// const add : MathOp = (a, b) => a + b;
// console.log(add(2,4))

// interfaces with methods

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     sayHello(): void
// }

// function greet(person: Person) {
//     console.log(`Hello, ${person.firstName} ${person.lastName}`)
//     person.sayHello()
// }

// const john: Person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     sayHello() {
//         console.log('Hi There')
//     },
// }

// const lakeer: Person = {
//     firstName: 'lakeer',
//     lastName: 'laka',
//     age: 40,
//     sayHello() {
//         console.log('Hi munjee')
//     },
// }

// greet(john)
// greet(lakeer)

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

// const song1: Song = {
//     songName: 'Natural',
//     singerName: 'Imagin Drigon',
//     printSongInfo: (songName, singerName) => {
//         return `Song: ${songName}, Singer: ${singerName}`
//     }
// }

// console.log(song1.printSongInfo('Natural', 'Imagin Drigon'))

// extending inerfaces

// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMovieInfo(name: string, price: number, ratings: number): string | number;
// }

// interface MovieGenre extends MovieDetails {
//   genre: string;
// }

// const movie1: MovieGenre = {
//   name: "Star Wars",
//   genre: "Action",
//   ratings: 9.8,
//   printMovieInfo(
//     name: string,
//     price: number,
//     ratings: number
//   ): string | number {
//     return `Move name: ${name} price: ${price} Ratings: ${ratings}`;
//   },
// };

// const res = movie1.printMovieInfo('John wick', 100, 9.7)
// console.log(res)

// interface Vehicle {
//     start(): void;
//     stop(): void
// }

// class Car implements Vehicle {
//     start(): void {
//         console.log('Car is starting')
//     }
//     stop():void {
//         console.log('car stops')
//     }
// }

// const myCar = new Car();
// myCar.start()
// myCar.stop()

// Declaration merging

// interface Car {
//     brand: string;
//     start(): void;
// }

// // Decralartion (merging intefrace extenstion)

// interface Car {
//     model: string;
//     stop(): void;
// }

// const myCar: Car = {
//     brand: 'BMW',
//     model: 'M24',
//     start() {
//         console.log('start')
//     },
//     stop() {
//         console.log('stop')
//     }
// }

// myCar.start()
// myCar.stop(

//)

///////// GENERICS

// function printNumber(item: number, defaultValue: number): [number, number] {
//     return [item, defaultValue]
// }

// function printString(item: string, defaultValue: string): [string, string] {
//     return [item, defaultValue]
// }

// function printBoolean(item: boolean, defaultValue:boolean): [boolean, boolean] {
//     return [item, defaultValue]
// }

// const num = printNumber(12, 20)
// const str = printString('hello', 'universe');
// const boolean = printBoolean(false, true)
// console.log(num)
// console.log(str)
// console.log(boolean)

// function printNumber(item: any, defaultValue: any): [any, any] {
//     return [item, defaultValue]
// }

// const num = printNumber(2, 'lakakkj');
// console.log(num)

// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//   return [item, defaultValue];
// }

// const res = uniqueDataTypesFunc<number>(10, 20);
// const res1 = uniqueDataTypesFunc<string>("star", "moon");
// const res2 = uniqueDataTypesFunc<boolean>(true, false);
// console.log(res);
// console.log(res1);
// console.log(res2);

// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//   return [item, defaultValue];
// }

// interface Dog {
//   name: string;
//   breed: string
// }

// const dog1 = uniqueDataTypesFunc<Dog>(
//   {
//     name: 'Buddy', breed: 'Labrador'
//   },
//   {name: 'default', breed: 'unknow'}
//   )

//   console.log(dog1)

// function getRandonmKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }

// const stringObjec = {a: 'apple', b: 'banana', c: 'cherry'}

// const res = getRandonmKeyValuePair<string>(stringObjec)

// console.log(res)

// const numberObjec = {one: 1, two: 2, three: 3}

// const res1 = getRandonmKeyValuePair<number>(numberObjec)
// console.log(res1)

// Array

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 6, 7, 8];

// const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);

// console.log(evenNumbers);

// const stringArr = ['apple', 'banana', 'cherry', 'date'];
// const shortWords = filterArray<string>(stringArr, word => word.length < 6)
// console.log(shortWords)


// interface Fruit {
//   name: string;
//   color: string

// }

// const fruitArray: Fruit[] = [
//   {name: 'apple', color: 'Red'},
//   {name: 'Banana', color: 'Yellow'},
//   {name: 'Cherry', color: 'Red'}
// ]


// const redFruits = filterArray<Fruit>(fruitArray, fruit => fruit.color === 'Red')
// console.log(redFruits)

// function reversePair<T, U>(value1: T, value2: U): [U,T] {
//   return [value2, value1]
// }

// const reversedPair = reversePair('hello', 20)
// console.log(reversedPair)

// Generic classes 
// class Box<T> {
//   private content: T;

//   constructor(initialContent:T){
//     this.content = initialContent
//   }

//   getContent(): T {
//     return this.content
//   }
//   setContent(newContent: T): void {
//     this.content = newContent
//   }
// }

// const stringBox = new Box<string>('hello')
// stringBox.setContent('new Content added')

// console.log(stringBox.getContent())

// const numberBox = new Box<number>(20)

// console.log(numberBox.getContent())


///// type narrowing

//1 Type guards
//2 The instanceof operator
//3 discriminated unions

// type MyType = string | number;

// function exampleFunction(value: MyType): void {
//   if(typeof value === 'string') {
//     console.log(value.toUpperCase())

//   } else {
//     console.log(value.toFixed(2))
//   }
// }

// exampleFunction('hello')
// exampleFunction(3
//   )


// class Dog {
//   bark(): void {
//     console.log('woff worff')
//   }
// }

// class Cat {
//   meow(): void {
//     console.log('meow')
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if(animal instanceof Dog) {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }

// const myDog = new Dog()
// const myCat = new Cat()
// animalSound(myDog)
// animalSound(myCat)

// type Employee = {
//   id: number;
//   name: string
// }

// type Manager = {
//   department: string;
//   role: string
// }



// type ManageWithEmployeeInfo = Employee & Manager;

// const manager: ManageWithEmployeeInfo = {
//   id: 123,
//   name: 'Lexi mohi',
//   department: 'Engineer',
//   role: "Team Lead"
// }

// console.log(manager.id)
// console.log(manager.name)
// console.log(manager.department)
// console.log(manager.role)

console.log(document)