function logger(a : string, b : number){
    console.log(`Value1: ${a}, Value2: ${b}`)
}
function logger2(a : IPerson, b : IAddress){
    console.log(`Value1: ${a}, Value2: ${b}`)
}
let a = 2, b = "Hello World!";
logger(b,a)

interface IPerson  {name: string}
interface IAddress {street : string}

class Person implements IPerson {
    constructor(public name: string){}
    toString(): string {return this.name}
}
class Address implements IAddress {
    constructor(public street: string){}
    toString(): string {return this.street}
}

logger2(new Person("Kurt"), new Address("Lyngby"))


function logger3<T, U>(a : T, b : U):void{
    console.log(`Value1: ${a}, Value2: ${b}`)
}
console.log("---------------")
logger3<IPerson, IAddress>(new Person("Kurt"), new Address("Lyngby"))
logger3<string, number>("HELLO world", 123)
logger3<boolean, boolean>(true, false)
logger3("a", "b")

class GenericLogger<T,U> {
    log = (a: T, b: U) => console.log(`Value1: ${a}, Value2: ${b}`)
}

let l = new GenericLogger<IPerson, IAddress>()
l.log(new Person("Kurt"), new Address("Lyngby"))