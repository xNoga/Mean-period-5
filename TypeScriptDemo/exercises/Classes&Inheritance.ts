interface IShape {
    color: string
}

class Shape implements IShape {
    constructor(public color: string) {
    }

    getArea() {
        return undefined;
    }

    getPerimeter() {
        return undefined;
    }

    toString() {
        return `color: ${this.color}`
    }

    getColor() {
        return this.color
    }

    setColor(color) {
        this.color = color
    }
}

let s1 = new Shape("blue");
console.log(`${s1.toString()}`)
s1.setColor("green")
console.log(`${s1.getColor()}`)

class Cirle extends Shape {
    constructor(public color: string,
                public radius: number) {
        super(color);
    }

    toString() {
        return `color: ${this.color}, radius: ${this.radius}`
    }

    getRadius() {
        return this.radius
    }

    setRadius(radius) {
        this.radius = radius
    }

}

let c1 = new Cirle("blue", 34);
c1.setRadius(44)
console.log(c1.getColor() + c1.toString())

class Cylinder extends Cirle {
    constructor(public color: string,
                public radius: number,
                public height: number) {
        super(color, radius);
    }
    getHeight(){return this.height}
    setHeight(height){this.height = height}
}

function printType<T>(a : T):void{
   // console.log(`type: ${a.constructor.name}`) // virker men giver fejl?
}

printType<number>(23);

function printTypes(arr: Array<any>): Array<any>{
    let result = [];
    arr.forEach(function (item) {
        result.push(item.constructor.name)
    })
    return result
}

function reverseArr<T>(arr : Array<T>): Array<T>{
    let result = [];
    for (let i = arr.length-1; i >= 0; i--){
        result.push(arr[i])
    }
    return result;
}

console.log(printTypes(["hej", 23, new Date]))
console.log(reverseArr<string>(["hej", "med", "dig"]))
console.log(reverseArr<number>([1,2,3]))
console.log(reverseArr<number>(["hej", "med", "dig"]))


class dataHolder<T> {
    constructor(public item: T){}
    getData(){return this.item}
    setData(data : T){this.item = data}
}

let d1 = new dataHolder<string>("hej");
console.log(d1.getData())
d1.setData(300)
console.log(d1.getData())

interface IOwner {
    owner: String;
}
class Owner {
    constructor(public owner: string){}
}
let o1 = new Owner("Magnoob")
let o2 = {
    name: "lars"
}


function printOwner<T extends IOwner>(item : T){
    console.log(item.owner)
}

printOwner(o1);
//printOwner(o2); virker ikke, objektet skal have en property 'owner'.