// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
 return numbers.filter((num) => num % 2 === 0);
};

const input: number[] = [1, 2, 3, 4, 5, 6];
const result: number[] = filterEvenNumbers(input);

// console.log(result);

// Problem 2
const reverseString = (str: string): string => {

 return str.split('').reverse().join('');
};

const sampleInput: string = "typescript";
const reversedResult: string = reverseString(sampleInput);

// console.log(reversedResult);

// Problem 3
function checkType(input: String | Number): string {
 if (typeof input === "string") {
   return "String";
 } else {
   return "Number";
 }
}

// console.log(checkType("Hello"));
// console.log(checkType(42));    

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
 return obj[key];
}

// Testing the function
const user = { id: 1, name: "John Doe", age: 21 };

const userName = getProperty(user, "name");
const userAge = getProperty(user, "age");



// console.log(userName);

// Problem 5
interface Book {
 title: string;
 author: string;
 publishedYear: number;
}


function toggleReadStatus(book: Book) {
 return {
   ...book,     
   isRead: true 
 };
}

const myBook: Book = {
 title: "TypeScript Guide",
 author: "Jane Doe",
 publishedYear: 2024
};

const updatedBook = toggleReadStatus(myBook);

// console.log(updatedBook);


// Problem 6
class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
   }
}

class Student extends Person {
   grade: string;

   constructor(name: string, age: number, grade: string) {
       super(name, age);
       this.grade = grade;
   }

   getDetails(): string {
       return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
   }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());



// // Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
   return arr1.filter(item => arr2.includes(item));
}

const intersectionResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// console.log(intersectionResult);
