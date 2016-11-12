interface myFunc {
    (s1: string, s2: string, s3: string) : Array<string>
}

let mf: myFunc;
mf = function (s1: string, s2: string, s3: string) {
    let result = []
    result.push(s1)
    result.push(s2)
    result.push(s3)
    return result
}

let mf2: myFunc;
mf2 = function (s1: string, s2: string, s3: string) {
    let result = []
    result.push(s1.toUpperCase())
    result.push(s2.toUpperCase())
    result.push(s3.toUpperCase())
    return result;
}

console.log(mf("hej", "med", "dig"))
console.log(mf2("Magnus", "er", "noob"))

let f2 = function logger(f1: myFunc){
//Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}
f2(mf)
f2(mf2)

