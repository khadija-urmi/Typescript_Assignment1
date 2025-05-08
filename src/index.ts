//problem:1

function formatString(input: string, toUpper: boolean | null = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//problem:2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

//problem:3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((result, currentArray) => [...result,
    ...currentArray
    ], []);
}
function setCounter(max="Welcome") {
    // ...
}

//problem:4
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
      }
      getModel(): string {
        return `Model: ${this.model}`;
    }

  }

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());   
console.log(myCar.getModel()); 


//problem:5
function processValue(value: string | number): number|undefined{

    if(typeof value === "string"){
       return value.length;
    }
    else if(typeof value === "number"){
       return value*2;
    }
}

//problem:6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{

     let mostExpensive: Product = products[0];

    for(const currentProduct of products){
        if(currentProduct.price>mostExpensive.price){
            mostExpensive=currentProduct;
        }
    }
    return mostExpensive;

}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(products));

//problem:7

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    let dayType: "Weekend" | "Weekday";
    switch (day) {
    case Day.Saturday:
    case Day.Sunday:
    dayType = "Weekend";  
        break;
    default:
      dayType = "Weekday";  
        break;
  }
  return dayType;
}
// console.log("Monday is",getDayType(Day.Monday));
// console.log("Sunday is",getDayType(Day.Sunday));

//problem:8
async function squareAsync(n: number): Promise<number>{
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

//  squareAsync(4).then(console.log);        
// squareAsync(-3).catch(console.error);