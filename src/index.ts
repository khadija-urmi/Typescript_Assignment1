
function formatString(input: string, toUpper: boolean | null = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((result, currentArray) => [...result,
    ...currentArray
    ], []);
}



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


function processValue(value: string | number): number | undefined {

    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    let mostExpensive: Product = products[0];

    for (const currentProduct of products) {
        if (currentProduct.price > mostExpensive.price) {
            mostExpensive = currentProduct;
        }
    }
    return mostExpensive;

}





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
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



async function squareAsync(n: number): Promise<number> {
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

