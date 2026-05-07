// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
 return numbers.filter((num) => num % 2 === 0);
};




// Problem 2
const reverseString = (str: string): string => {

 return str.split('').reverse().join('');
};




// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}
   

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
 return obj[key];
}






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




// // Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
   return arr1.filter(item => arr2.includes(item));
}
